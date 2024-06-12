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
                const mail = email;
                const res = await axios.get("http://localhost:3001/admin-users", { mail } );// { params: { user_mail: mail } });
                console.log(email);
                console.log("respuesta " + res.data);
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

                
                {users.map((user) => (
                    <tbody align="center">
                        <td>{user.user_mail}</td>
                        <td>{user.user_name}</td>
                        <td>{user.user_lastname}</td>
                        <td>{user.user_password}</td>
                        <td>{verificarTipo(user.user_type)}</td>

                        <td>
                            <button className="delete">
                                <Link
                                    to={`/update/${user.id}`}
                                    style={{ color: "inherit", textDecoration: "none" }}
                                >
                                    Delete
                                </Link>
                            </button>
                        </td>

                    </tbody>
                ))
                }

            </table>
            <br />
        </div>
    );
};

export default Users;