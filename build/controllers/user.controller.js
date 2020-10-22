"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getUsers = getUsers;
exports.createUser = createUser;
exports.getOneUser = getOneUser;
exports.updateUser = updateUser;
exports.deleteUser = deleteUser;

var _user = _interopRequireDefault(require("../models/user"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const bcrypt = require("bcrypt");

async function getUsers(req, res) {
  try {
    const users = await _user.default.findAll();
    res.json({
      data: users
    });
  } catch (error) {
    res.status(500).json({
      error: {
        code: "ERROR",
        http_code: 500,
        message: 'Somethin goes wrong' + error
      }
    });
  }
}

async function createUser(req, res) {
  const {
    rol_id,
    username,
    name,
    mail
  } = req.body;
  const salt = await bcrypt.genSalt(10);
  const password = await bcrypt.hash(req.body.password, salt);

  try {
    let newUser = await _user.default.create({
      rol_id,
      username,
      name,
      mail,
      password
    }, {
      fields: ['rol_id', 'username', 'name', 'mail', 'password']
    });

    if (newUser) {
      return res.json({
        message: 'User created successfully',
        data: newUser
      });
    }
  } catch (error) {
    res.status(500).json({
      error: {
        code: "ERROR",
        http_code: 500,
        message: 'Somethin goes wrong' + error
      }
    });
  }
}

async function getOneUser(req, res) {
  try {
    const {
      id
    } = req.params;
    const user = await _user.default.findOne({
      where: {
        id
      }
    });
    res.json({
      data: user
    });
  } catch (error) {
    res.status(500).json({
      error: {
        code: "ERROR",
        http_code: 500,
        message: 'Somethin goes wrong' + error
      }
    });
  }
}

async function updateUser(req, res) {
  try {
    const {
      id
    } = req.params;
    const {
      rol_id,
      name,
      mail
    } = req.body;
    const data = await _user.default.findAll({
      attributes: ['id', 'rol_id', 'name', 'mail', 'password', 'thumbnail'],
      where: {
        id
      }
    });

    if (data.length > 0) {
      data.forEach(async User => {
        await User.update({
          rol_id,
          name,
          mail
        });
      });
    }

    return res.json({
      message: 'User Updated Succefully',
      data: data
    });
  } catch (error) {
    res.status(500).json({
      error: {
        code: "ERROR",
        http_code: 500,
        message: 'Somethin goes wrong' + error
      }
    });
  }
}

async function deleteUser(req, res) {
  try {
    const {
      id
    } = req.params;
    const deleteRowCount = await _user.default.destroy({
      where: {
        id
      }
    });
    res.json({
      message: 'User deleted',
      count: deleteRowCount
    });
  } catch (error) {
    res.status(500).json({
      error: {
        code: "ERROR",
        http_code: 500,
        message: 'Somethin goes wrong' + error
      }
    });
  }
}