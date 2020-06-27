const express = require('express');
const router = express.Router();

const { consultar, insertar } = require('../controllers/freelancer.controller');

router.get('/consultarFreelancer', consultar );
router.post('/insertarFreelancer', insertar );

module.exports = router;