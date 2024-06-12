import { Link } from "react-router-dom";
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { Foot, Head } from "../components/headfoot";
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function Createacc() {

    const [formData, setFormData] = useState({
        user_name: '',
        user_lastname: '',
        user_mail: '',
        user_password: '',
        user_creditcard: '',
        user_type: 0
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
                && formData.user_password !== ''
                && formData.user_creditcard !== '') {
                    try{
                        await axios.post("http://localhost:3001/user", formData);
                        // console.log("envie la solicitud correctamente")
                        alert("Usuario Creado!!!");
                        navigate("/");
                    }catch(err)
                    {
                        console.log(err);
                    }
            } else {
                alert("Rellena los campos necesarios");
            }
    }
    return (
        <>
            <Head />
            <Card className="text-center mx-auto" style={{ width: '35rem', marginTop: '90px', marginBottom: '110px' }}>

                <Card.Header> <h1>Crear Cuenta</h1> </Card.Header>
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
                                <input
                                    className="control"
                                    type="text"
                                    name="user_creditcard"
                                    placeholder="Tarjeta de crédito"
                                    onChange={handleChange}
                                />
                            </p>
                            <p> <input className="button" type="submit" name="create" value="Crear" /> </p>
                        </form>
                    </section>
                    <div>
                        <Link to="/">
                            <Button variant="primary">Ingresar</Button>
                        </Link>
                    </div>
                </Card.Body>
            </Card>
            <Foot />
        </>
    );
}