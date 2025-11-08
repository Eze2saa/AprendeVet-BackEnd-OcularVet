const { response } = require('express');
const InsigniasUsuarioGlucemia = require('../models/InsigniasUsuarioGlucemia');

// Crear o actualizar insignias del usuario
const guardarInsignias = async (req, res = response) => {
  try {
    const { userId, insigniaEnAyuno, insigniaLuegoDeAlimentarse, insigniaConsecutivos } = req.body;

    // Verificamos si ya existen insignias para ese usuario
    let insignias = await InsigniasUsuarioGlucemia.findOne({ userId });
    if (insignias) {
      // Actualizamos las existentes
      insignias.insigniaEnAyuno = insigniaEnAyuno;
      insignias.insigniaLuegoDeAlimentarse = insigniaLuegoDeAlimentarse;
      insignias.insigniaConsecutivos = insigniaConsecutivos;
    } else {
      // Creamos nuevas insignias
      insignias = new InsigniasUsuarioGlucemia(req.body);
    }

    await insignias.save();

    return res.json({
      insignias
    });

  } catch (error) {
    console.error(error);
    return res.status(500).json({
      msg: 'Ocurrió un error al intentar guardar las insignias del usuario'
    });
  }
};

// Obtener insignias por usuario
const obtenerInsigniasPorUsuario = async (req, res = response) => {
  try {
    const { userId } = req.params;
    const insignias = await InsigniasUsuarioGlucemia.findOne({ userId });

    if (!insignias) {
      return res.status(404).json({
        ok: false,
        msg: 'No se encontraron insignias para este usuario'
      });
    }

    return res.json({
      insignias
    });

  } catch (error) {
    console.error(error);
    return res.status(500).json({
      msg: 'Ocurrió un error al intentar recuperar las insignias del usuario'
    });
  }
};

module.exports = {
  guardarInsignias,
  obtenerInsigniasPorUsuario
};