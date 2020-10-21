import User from '../models/User';
import jwt from 'jsonwebtoken';
import config from '../config';
import bcrypt from 'bcryptjs';

export const signUp = (req, res) => {

    let password = bcrypt.hashSync(req.body.password, 10);

        // Crear un usuario
        User.create({
            id: req.body.id,
            rol_id: req.body.rol_id,
            username: req.body.username,
            name: req.body.name,
            mail: req.body.mail,
            password: password,
            thumbnail: req.body.thumbnail
        }).then(user => {

            // Creamos el token
            let token = jwt.sign({ user: user }, config.SECRET, {
                expiresIn: 86400
            });

            res.json({
                user: user,
                token: token
            });

        }).catch(err => {
            res.status(500).json(err);
        });

    }




export const logIn = (req, res) => {

    let { mail, password } = req.body;

        // Buscar usuario
        User.findOne({
            where: {
                mail: mail
            }
        }).then(user => {

            if (!user) {
                res.status(404).json({ msg: "This mail not exist" });
            } else {

                if (bcrypt.compareSync(password, user.password)) {

                    // Creamos el token
                    let token = jwt.sign({ user: user }, config.SECRET, {
                        expiresIn: 86400
                    });

                    res.json({
                        user: user,
                        token: token
                    })

                } else {

                    // Unauthorized Access
                    res.status(401).json({ msg: "Incorrect Password" })
                }

            }

        }).catch(err => {
            res.status(500).json(err);
        })

}