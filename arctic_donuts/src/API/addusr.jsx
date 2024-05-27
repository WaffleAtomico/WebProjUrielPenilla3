import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Adduser = () => 
    {
        
        const [formData, setFormData] = useState({
            user_name: '',
            user_lastname: '',
            user_mail: '',
            user_password: '',
            user_creditcard: ''
        });
        const navigate = useNavigate
        const handleChange = (event) => {
            setFormData({
                ...formData,
                [event.target.name]: event.target.value
            });
        };
        console.log(formData);

        const handleSubmit = async (e) => {
            e.preventDefault();
            {/*Lo vamos a cambiar con obtener el valor de la bd */ }
            if (formData.user_creditcard !== ''
                && formData.user_lastname !== ''
                && formData.user_mail !== ''
                && formData.user_password !== ''
                && formData.user_creditcard !== '') {
                    try{
                        await axios.post("http://localhost:8800/users", formData);
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

        return(
            <>
              <form>
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
                <p> <input className="button" type="submit" name="create" value="Crear" onClick={handleSubmit} /> </p>
            </form>
            </>
        )
    }
export default Adduser;