import '../styles/addEmployees.css'; //Importar el estilo correcto
import { useState } from 'react';
import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import CloseButton from 'react-bootstrap/CloseButton';


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

export default function CreateAdmin(props) {

    const [formData, setFormData] = useState({
        user_name: '',
        user_lastname: '',
        user_mail: '',
        user_password: '',
        user_creditcard: 0,
        user_type: 1
    });

    const navigate = useNavigate();

    const handleChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        {/*Lo vamos a cambiar con obtener el valor de la bd */ }
        if (formData.user_creditcard !== ''
            && formData.user_lastname !== ''
            && formData.user_mail !== ''
            && formData.user_password !== '') {
            try {
                await axios.post("http://localhost:3001/user", formData);
                // console.log("envie la solicitud correctamente")
                alert("Admin Creado!!!");
                // navigate(`/admin_employees/${props.user_mail}`);
                props.fetchAllUsers();
                props.setVisibilty(visible => !visible);
            } catch (err) {
                console.log(err);
            }
        } else {
            alert("Rellena los campos necesarios");
        }
    }
    return (
        <>
            <Card className="text-center mx-auto" style={{ width: '35rem', marginTop: '90px', marginBottom: '110px' }}>
                
                <CloseButton  onClick={()=>props.setVisibilty()} /> 

                <Card.Header> <h1>Crear Empleado</h1> </Card.Header>
                {/* <h1 id="titulo2">Iniciar sesión</h1> */}
                <Card.Body>
                    <section className="form-login">
                        <form onSubmit={handleSubmit}>
                            <p>
                                <input
                                    className="control"
                                    type="text"
                                    name="user_name"
                                    placeholder="Nombre"
                                    style={{ marginTop: '5px' }}
                                    onChange={handleChange}
                                />
                            </p>

                            <p>
                                <input
                                    className="control"
                                    type="text"
                                    name="user_lastname"
                                    placeholder="Apellido"
                                    onChange={handleChange}
                                />
                            </p>
                            <p>
                                <input
                                    className="control"
                                    type="text"
                                    name="user_mail"
                                    placeholder="Correo electronico"
                                    style={{ marginTop: '5px' }}
                                    onChange={handleChange}
                                />
                            </p>
                            <p>
                                <input
                                    className="control"
                                    type="password"
                                    name="user_password"
                                    placeholder="Contrase&ntilde;a"
                                    onChange={handleChange}
                                />
                            </p>
                            <p> 
                                <input className="button" type="submit" name="create" value="Crear" /> 
                            </p>
                        </form>
                    </section>
                    <div>
                    </div>
                </Card.Body>
            </Card>
        </>
    );
}