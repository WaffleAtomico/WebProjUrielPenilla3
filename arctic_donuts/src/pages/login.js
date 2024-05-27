import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import Button from 'react-bootstrap/Button';
import { Foot, Head } from "../components/headfoot";
    
import Card from 'react-bootstrap/Card';
import axios from "axios";

export default function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    console.log(email + ":email  password:" + password )

    const HandleLog = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:8800/check-user", { email, password });
            if (response.data.exists) {
                alert("El usuario si existe");
                navigate(`/cart/${email}`);
            } else {
                alert("Usuario no existe o contraseña incorrecta");
                navigate("/");
            }
        } catch (err) {
            console.log(err);
        }
    };


    return (
        <>
            <Head />
            <Card className="text-center mx-auto" style={{ width: '35rem', marginTop: '90px', marginBottom: '110px' }}>

                <Card.Header> <h1>Inicio de Sesión</h1> </Card.Header>
                <Card.Body>

                    <section className="form-login">
                        <form>
                            <p> <input className="control" type="text" name="name" placeholder="Correo electronico" style={{ marginTop: '5px' }} 
                            onChange={e => setEmail(e.target.value)} /> </p>
                            <p> <input className="control" type="text" name="password" placeholder="Contrase&ntilde;a" 
                            onChange={e => setPassword(e.target.value)} /> </p>
                        </form>
                    </section>

                    {/* <Link to="/cart" > */}
                        <Button variant="primary" size="lg" className="inic" style={{ marginBottom: '15px', marginTop: '5px' }}
                            onClick={HandleLog}>
                            Iniciar Sesión
                        </Button>
                    {/* </Link> */}
                     <tr />

                    <Link to="/create_acount">
                        <Button variant="outline-primary" size="sm" className="creac" style={{ marginBottom: '5px' }}>Crear Cuenta</Button>
                    </Link> <tr />

                </Card.Body>

            </Card>
            <Foot />
        </>
    );
}