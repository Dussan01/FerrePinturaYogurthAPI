"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = require("mongoose");

// idMateria, idUsario, idActividad, nota
var notaSchema = new _mongoose.Schema({
  user: [{
    ref: "User",
    type: _mongoose.Schema.Types.ObjectId
  }],
  Materia: {
    type: String
  },
  nota: {
    type: Number
  },
  descripcion: {
    type: String
  }
}, {
  timestamps: true,
  versionKey: false
});

var _default = (0, _mongoose.model)('Nota', notaSchema);

exports["default"] = _default;