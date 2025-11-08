const {Router} = require('express');
const { check } = require('express-validator');
const { validarCampos } = require('../middlewares/validar-campos');
const controllerUsuario  = require('../controllers/usuario.controller');
const controllerInsignias = require('../controllers/insignias-usuario-glucemia.controller');

const router = Router();

//RUTAS
router.get('/obtenerUsuario', 
            [],
            controllerUsuario.obtenerUsuario)

router.get('/obtenerTodosLosUsuarios', 
            [],
            controllerUsuario.obtenerTodosLosUsuarios)

router.put('/modificarUsuario',
            [],
            controllerUsuario.modificarUsuario)

router.put('/modificarPassword',
            [check('passwordNueva','La contraseña es obligatoria y debe poseer 6 caracteres').isLength({min:6}),
            validarCampos],
            controllerUsuario.modificarPassword)
            
router.put('/reiniciarPassword',
            [check('passwordNueva','La contraseña es obligatoria y debe poseer 6 caracteres').isLength({min:6}),
            validarCampos],
            controllerUsuario.reiniciarPassword)

router.put('/hacerAdmin',
            [],
            controllerUsuario.hacerAdmin)

router.delete('/eliminarUsuario',
               [],
               controllerUsuario.eliminarUsuario)

router.put('/modificarConfigAdmin',
            [],
            controllerUsuario.modificarConfiguracionAdmin)

router.get('/obtenerConfigAdmin', 
            [],
            controllerUsuario.obtenerConfigAdmin)

router.post('/:userId/guardarInsigniasGlucemia',
            controllerInsignias.guardarInsignias);

router.get('/:userId/obtenerInsigniasGlucemia', 
           controllerInsignias.obtenerInsigniasPorUsuario);

module.exports = router;