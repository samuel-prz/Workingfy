const pool = require('../db_connection');

const freelancerCrtl = {};


freelancerCrtl.consultar = async (req, res) => {
    try{
        const freelancer = await pool.query('SELECT * FROM freelancer');
        console.log(freelancer);
        res.status(200).json(freelancer);
    }catch(error){
        console.log(error)
    }
};

freelancerCrtl.insertar = async (req, res) => {
    try{
        const result = await pool.query('INSERT INTO freelancer set ?', req.body);
        console.log(result);
        res.status(200).json({ message: 'success'});
    }catch(error){
        console.log(error)
        res.status(500).json({ message: 'Error interno de servicios'});
    }
};



module.exports = freelancerCrtl;