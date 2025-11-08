const {Router} = require('express');
const controllerDiagnostico  = require('../controllers/diagnostico.controller');

const router = Router();

//RUTAS
//Obtener todos los Diagnosticos
router.get('/obtenerTodosLosDiagnosticos', 
            [], controllerDiagnostico.obtenerTodosLosDiagnosticos)

//Crear un Diagnostico
router.post('/crearDiagnostico',[], controllerDiagnostico.crearDiagnostico)

module.exports = router;