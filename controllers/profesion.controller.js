const pool = require('../db_connection');


const profesionCrtl = {};


profesionCrtl.consultar = async (req, res) => {
    try{
        const profesiones = await pool.query('SELECT * FROM profesion');
        //console.log(profesiones);
        res.status(200).json(profesiones);
    }catch(error){
        console.log(error)
    }
};



module.exports = profesionCrtl;
