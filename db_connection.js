const mysql = require('mysql');
const { promisify } = require('util');

//configuracion de la conexion
const connection = {
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'workingfy_db'
};

//pool crea hilos por cada conexion, ejecutandose simultaneamente
const pool = mysql.createPool(connection);

pool.getConnection( (err, connection) => {

    //Manejador de errores
    if(err){
        //Error cuando la conexion se perdie
        if( err.code === 'PROTOCOL_CONNECTION_LOST') {
            console.error('La conexion a la base de datos se cerro');
        }
        //Error cuando hay sobrecarga
        if( err.code === 'ER_CON_COUNT_ERROR') {
            console.error('La base de datos tiene muchas conexiones');
        }
        //Error de rechazo de conexion
        if( err.code === 'ECONNREFUSED') {
            console.error('La conxion a la base de datos fue rechazada, puede ser que los servicios esten inactivos');
        }
    }

    if(connection){
        connection.release();
        console.log('Conexion a la base de datos completada correctamente');
        return;
    }

});

//Convirtiendo los metodos query que funcionan con callbacks, a promesas
pool.query = promisify(pool.query);

module.exports = pool;

