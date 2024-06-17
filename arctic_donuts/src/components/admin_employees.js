import '../styles/table.css'; //Importar el estilo correcto
import { useEffect, useState } from 'react';
import React from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";


//const productsToBD = props.products.filter(product => product.amount > 0);

/*
const [formData, setFormData] = users({
    user_name: '',
    user_lastname: '',
    user_mail: '',
    user_password: '',
    user_creditcard: ''
});
*/

const Users = () => {
    const { email } = useParams();

    const [users, setusers] = useState([]);

    useEffect(() => {
        const fetchAllUsers = async () => {
            try {
                console.log(email);
                const res = await axios.post("http://localhost:3001/admin-users", { user_mail: email });
                console.log("respuesta ", res.data);
                setusers(res.data);
            } catch (err) {
                console.log(err);
            }
        };
        fetchAllUsers();
    }, []);

    function verificarTipo(n) {
        if (n == 1) {
            return "Administrador"
        } else {
            return "Usuario"
        }
    }
    console.log(users);

    const handleDelete = async (id) => {
        try {
          await axios.delete(`http://localhost:3001/delete-admin/${id}`);
          window.location.reload()
        } catch (err) {
          console.log(err);
        }
      };

    return (
        <div>
            <br />
            <table>

                <thead align="center">
                    <tr>
                        <th> Correo </th>
                        <th> Nombre </th>
                        <th> Apellido </th>
                        <th> Contraseña </th>
                        <th> Tipo de Usuario </th>
                        <th> Eliminar </th>
                    </tr>
                </thead>

                <tbody align="center">
                    {users.map((user) => (
                        <div key={user.id} className="user">
                            <td>{user.user_mail}</td>
                            <td>{user.user_name}</td>
                            <td>{user.user_lastname}</td>
                            <td>{user.user_password}</td>
                            <td>{verificarTipo(user.user_type)}</td>
                            <td>
                            <button className="delete" onClick={() => handleDelete(user.id)}>Delete</button>
                            </td>
                        </div>
                    ))
                    }
                </tbody>

            </table>
            <br />
        </div>
    );
};

export default Users;