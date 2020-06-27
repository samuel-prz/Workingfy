const express = require('express');
const router = express.Router();

const { consultar } = require('../controllers/profesion.controller');

router.get('/consultarProfesion', consultar );

module.exports = router;



