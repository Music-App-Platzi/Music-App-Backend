"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sequelize = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

var _config = _interopRequireDefault(require("../config"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const DB_NAME = _config.default.DB_NAME;
const DB_USER = _config.default.DB_USER;
const DB_PASSWORD = _config.default.DB_PASSWORD;
const DB_HOST = _config.default.DB_HOST;
const DB_PORT = _config.default.DB_PORT;
const sequelize = new _sequelize.default(DB_NAME, DB_USER, DB_PASSWORD, {
  host: DB_HOST,
  port: DB_PORT,
  dialect: 'postgres',
  pool: {
    max: 5,
    min: 0,
    require: 30000,
    idle: 10000
  },
  logging: false
});
exports.sequelize = sequelize;