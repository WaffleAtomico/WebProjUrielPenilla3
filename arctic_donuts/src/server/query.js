const express = require('express');

const db = require('../database/conexion');
const user = require('../models/user');
const cors = require('cors');

const PORT = 3000; //1000 3306 3000 3001 8000

const query = express();
query.use(express.json());

query.use(cors({
    origin: `http://localhost:${PORT}/`
}));

//Read all
/* export const readUsers = async (req, res) => {
    try {
        const users = await user.findAll();
        console.log('jala chido');
        //res.json(users);
    }
    catch (error) {
        console.log(`No jala chido porque: ${error}`);
        //res.json( {message: error.message} );
    }
}

//Read one
export const readUser = async (req, res) => {
    try {
        const user = user.findAll({
            where:{ id: req.params.id }
        });
        console.log('jala chido');
        //res.json(user);
    }
    catch (error) {
        console.log(`No jala chido porque: ${error}`);
        //res.json( {message: error.message} );
    }
} */

//read

query.get(`/testget`, async (req, res) => {
    
})

//Create
query.post(`/insert_user`, async (req, res) => {
    console.log("Entre al post");
    try {
        const
        {
            user_mail,
            user_name,
            user_lastname,
            user_creditcard,
            user_password
        } = req.body;

        const insertUser = await user.create
        {
            user_mail,
            user_name,
            user_lastname,
            user_creditcard,
            user_password
        }

        console.log('usuario registrado');
        return res.status(200).json({ mensaje: 'Usuario registrado correctamente' });
    }
    catch (error) {
        if (response.status === 200) {
            alert("Usuario agregado");
            console.error('Error al registrar usuario:', error);
            res.status(500).json({ error: 'Error interno del servidor' });
        }
    }
});

query.listen(PORT, (req, res) => {
    console.log(`La pagina anda jalando aqui: http://localhost:${PORT}`)
});

module.exports = query;