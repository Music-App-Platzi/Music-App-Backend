"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.logIn = exports.signUp = void 0;

var _user = _interopRequireDefault(require("../models/user"));

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var _config = _interopRequireDefault(require("../config"));

var _bcryptjs = _interopRequireDefault(require("bcryptjs"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const signUp = (req, res) => {
  // hash password
  let password = _bcryptjs.default.hashSync(req.body.password, 10); // create user


  _user.default.create({
    rol_id: req.body.rol_id,
    username: req.body.username,
    name: req.body.name,
    mail: req.body.mail,
    password: password
  }, {
    fields: ['rol_id', 'username', 'name', 'mail', 'password']
  }).then(user => {
    // create token
    let token = _jsonwebtoken.default.sign({
      user: user
    }, _config.default.SECRET, {
      expiresIn: 86400
    });

    res.json({
      user: user,
      token: token
    });
  }).catch(err => {
    res.status(500).json(err);
  });
};

exports.signUp = signUp;

const logIn = (req, res) => {
  let {
    mail,
    password
  } = req.body; // search user

  _user.default.findOne({
    where: {
      mail: mail
    }
  }).then(user => {
    if (!user) {
      res.status(404).json({
        msg: "This mail not exist"
      });
    } else {
      if (_bcryptjs.default.compareSync(password, user.password)) {
        // create token
        let token = _jsonwebtoken.default.sign({
          user: user
        }, _config.default.SECRET, {
          expiresIn: 86400
        });

        res.json({
          user: user,
          is_user: true,
          token: token
        });
      } else {
        // Unauthorized Access
        res.status(401).json({
          msg: "Incorrect Password"
        });
      }
    }
  }).catch(err => {
    res.status(500).json(err);
  });
};

exports.logIn = logIn;