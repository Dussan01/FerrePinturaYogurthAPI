"use strict";

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// mongoose.connect("mongodb://localhost/colegio",{
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     useFindAndModify: true,
//     useCreateIndex: true
// })
//                 .then(db => console.log('Db esta conectadad'))
//                 .catch(error => console.log(error))
try {
  _mongoose["default"].connect("mongodb+srv://".concat(process.env.USER, ":").concat(process.env.PASSWORD, "@cluster0.ymr7x.mongodb.net/").concat(process.env.DBNAME, "?retryWrites=true&w=majority"), {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: true,
    useCreateIndex: true
  }).then(function (db) {
    return console.log('Base de datos conectada');
  })["catch"](function (error) {
    return console.log(error);
  });
} catch (error) {
  console.log(error);
}