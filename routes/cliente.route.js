const express = require('express');
const router = express.Router();

const { consultar, insertar } = require('../controllers/cliente.controller');

router.get('/consultarCliente', consultar );
router.post('/insertarCliente', insertar );

module.exports = router;