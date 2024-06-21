import '../styles/addEmployees.css'; //Importar el estilo correcto
import { useState, useEffect } from 'react';
import React from "react";
import axios from "axios";
// import { useNavigate, useLocation } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import CloseButton from 'react-bootstrap/CloseButton';

export default function UpdateProduct(props) {

    const [formData, setFormData] = useState({
        product_name: props.product.product_name,
        product_cost: props.product.product_cost,
        product_amount: props.product.product_amount,
        product_img_url: props.product.product_img_url,
    });

    useEffect(() => {
        console.log(props.product);
        console.log(props.product.product_name);
    }, []);
    
    const handleChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        });
        console.log(formData);
    };
    

    const handleSubmit = async (e) => {
        console.log(formData);
        e.preventDefault();
        {/*Lo vamos a cambiar con obtener el valor de la bd */ }
        if (formData.product_name !== ''
            && formData.product_cost !== ''
            && formData.product_amount !== ''
            && formData.product_img_url !== '') {

               const infoToSend = {
                    product_name: formData.product_name,
                    product_cost: formData.product_cost,
                    product_amount: formData.product_amount,
                    product_img_url: formData.product_img_url,
                    id_product: props.product.id_product,
               }
            
            try {
                await axios.post("http://localhost:3001/update-products", infoToSend);
                //console.log("envie la solicitud correctamente")
                alert("Producto Actualizado!!!");
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

                <CloseButton onClick={() => props.setVisibilty()} />

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
                                    value={formData.product_name}
                                />
                            </p>
                            <p>
                                $<input
                                    className="control"
                                    type="number"
                                    name="product_cost"
                                    placeholder="Costo"
                                    onChange={handleChange} required
                                    value={formData.product_cost}
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
                                    value={formData.product_amount}
                                />
                            </p>
                            <p>
                                <input
                                    className="control"
                                    type="text"
                                    name="product_img_url"
                                    placeholder="Imagen"
                                    onChange={handleChange} required
                                    value={formData.product_img_url}
                                />
                            </p>
                            <p>
                                <input className="button" type="submit" name="create" value="Actualizar producto" />
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