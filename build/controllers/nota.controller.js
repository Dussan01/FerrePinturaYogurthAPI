"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.verNotas = void 0;

var _Desarrollo = _interopRequireDefault(require("../models/Desarrollo"));

var _mongoose = require("mongoose");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var verNotas = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var foundDesarollos, suma, result;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _Desarrollo["default"].find({
              'user': _mongoose.mongo.ObjectId(req.params.idUser)
            });

          case 2:
            foundDesarollos = _context.sent;
            suma = 0;
            foundDesarollos.forEach(function (value) {
              suma += value.nota;
            });
            result = suma / foundDesarollos.length;

          case 6:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function verNotas(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.verNotas = verNotas;