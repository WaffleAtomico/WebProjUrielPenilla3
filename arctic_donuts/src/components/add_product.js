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

export default function CreateProduct(props) {

    const [formData, setFormData] = useState({
        id_product: null,
        product_name: '',
        product_cost: '',
        product_amount: '',
        product_img_url: '',
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
        if (formData.product_name !== ''
            && formData.product_cost !== ''
            && formData.product_amount !== ''
            && formData.product_img_url !== '') {
            try {
                await axios.post("http://localhost:3001/product", formData);
                //console.log("envie la solicitud correctamente")
                alert("Producto Añadido!!!");
                // navigate(`/admin_storage/${props.user_mail}`);
                props.fetchAllProducts();
                props.setVisibilty(visible => !visible);
                props.setVisibilty();
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

                <Card.Header> <h1>Añadir Producto</h1> </Card.Header>
                {/* <h1 id="titulo2">Iniciar sesión</h1> */}
                <Card.Body>
                    <section className="form-login">
                        <form onSubmit={handleSubmit}>
                            <p>
                                <input
                                    className="control"
                                    type="text"
                                    name="product_name"
                                    placeholder="Nombre"
                                    style={{ marginTop: '5px' }}
                                    onChange={handleChange} required
                                />
                            </p>
                            <p>
                                $<input
                                    className="control"
                                    type="number"
                                    name="product_cost"
                                    placeholder="Costo"
                                    onChange={handleChange} required
                                />
                            </p>
                            <p>
                                <input
                                    className="control"
                                    type="number"
                                    name="product_amount"
                                    placeholder="Cantidad"
                                    style={{ marginTop: '5px' }}
                                    onChange={handleChange} required
                                />
                            </p>
                            <p>
                                <input
                                    className="control"
                                    type="text"
                                    name="product_img_url"
                                    placeholder="Imagen"
                                    onChange={handleChange} required
                                />
                            </p>
                            <p> 
                                <input className="button" type="submit" name="create" value="Agregar producto"/> 
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