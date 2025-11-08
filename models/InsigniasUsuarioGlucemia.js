const { Schema, model } = require('mongoose');

const InsigniasUsuarioGlucemiaSchema = Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'Usuario',
    required: true
  },
  insigniaEnAyuno: {
    type: Boolean,
    default: false
  },
  insigniaLuegoDeAlimentarse: {
    type: Boolean,
    default: false
  },
  insigniaConsecutivos: {
    type: Boolean,
    default: false
  },
  fechaAlta: {
    type: Date,
    default: Date.now
  },
  fechaActualizacion: {
    type: Date,
    default: Date.now
  }
});

InsigniasUsuarioGlucemiaSchema.pre('save', function (next) {
  this.fechaActualizacion = Date.now();
  next();
});

module.exports = model('InsigniasUsuarioGlucemia', InsigniasUsuarioGlucemiaSchema);