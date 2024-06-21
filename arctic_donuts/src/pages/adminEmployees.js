import React, { useState, useEffect } from "react";
import AddEmployees from '../components/add_employee';
import { Foot, Head } from "../components/headfoot";
import { Link, useParams } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { HiOutlineLogin } from "react-icons/hi";import '../styles/table.css';
import { IoIosPersonAdd } from "react-icons/io";
import { FaUserAltSlash } from "react-icons/fa";

export default function Admin_Employees(props) {
    const { email } = useParams();

    // Mostrar todos los empleados, exepto el actual
    const [visible, setVisibilty] = useState(false);

    const [users, setusers] = useState([]);

    const handleFormCreate = () => {
        setVisibilty(visible => !visible);
    }

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

    useEffect(() => {
        fetchAllUsers();
    }, []);

    const handleDelete = async (user_mail) => {
        try {
            console.log(user_mail);
            await axios.post("http://localhost:3001/delete-admin", { user_mail: user_mail });
            //window.location.reload();
            fetchAllUsers();
        } catch (err) {
            console.log(err);
        }
    };

    function verificarTipo(n) {
        if (n == 1) {
            return "Administrador"
        } else {
            return "Usuario"
        }
    }

    return (
        <>
            {visible && <div style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                zIndex: 999
            }} >
                <div style={{ visibility: visible ? 'visible' : 'hidden' }}>
                    {/*Componente del coso para agregar admins*/}
                    <AddEmployees
                        user_mail={email}
                        setVisibilty={setVisibilty}
                        fetchAllUsers={fetchAllUsers}
                    />
                </div>
            </div>}
            <Head />

            <div className="navbar">
                <header className="head-nav">
                    <Link className="link" to={`/admin_storage/${email}`} > Administracion de Productos </Link>
                </header>
            </div>

            <Link to="/" >
                <Button variant="primary" size="lg" className="inic">
                    <HiOutlineLogin />
                </Button>
            </Link>

            <div onClick={handleFormCreate} style={{ cursor: "pointer" }} >
                <h1>
                    <IoIosPersonAdd />
                    {/* <Button variant="info" size='lg' >Pagar</Button > */}
                </h1>
            </div>
            
            <br />
            <h1 >Empleados</h1>
            
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

                    <tbody align="center" className="user">
                        {users.map((user) => (
                            <tr key={user.user_mail}>
                                <td>{user.user_mail}</td>
                                <td>{user.user_name}</td>
                                <td>{user.user_lastname}</td>
                                <td>{user.user_password}</td>
                                <td>{verificarTipo(user.user_type)}</td>
                                <td>
                                    <p className="delete" onClick={() => handleDelete(user.user_mail)}>
                                        <FaUserAltSlash />
                                        </p>
                                </td>
                            </tr>
                        ))
                        }
                    </tbody>
                    
                </table>
                <br/> <br/> <br/> <br/> <br/> <br/> 
            </div>
            <Foot />
        </>
    );
}