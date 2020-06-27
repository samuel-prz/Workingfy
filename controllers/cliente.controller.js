const pool = require('../db_connection');

const clienteCrtl = {};


clienteCrtl.consultar = async (req, res) => {
    try{
        const cliente = await pool.query('SELECT * FROM cliente');
        console.log(cliente);
        res.status(200).json(cliente);
    }catch(error){
        console.log(error)
    }
};

clienteCrtl.insertar = async (req, res) => {
    try{
        const result = await pool.query('INSERT INTO cliente set ?', req.body);
        console.log(result);
        res.status(200).json({ message: 'success'});
    }catch(error){
        console.log(error)
        res.status(500).json({ message: 'Error interno de servicios'});
    }
};



module.exports = clienteCrtl;