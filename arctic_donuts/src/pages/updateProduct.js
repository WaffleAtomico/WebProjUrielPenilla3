import '../styles/addEmployees.css'; //Importar el estilo correcto
import { useState } from 'react';
import { Link } from "react-router-dom";
import React from "react";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import { Foot, Head } from "../components/headfoot";

export default function UpdateProduct() {

    const navigate = useNavigate();
    const location = useLocation();

    const id_product = location.pathname.split("/")[2];

    const [formData, setFormData] = useState({
        id_product: id_product,
        product_name: '',
        product_cost: '',
        product_amount: '',
        product_img_url: '',
    });

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
            } catch (err) {
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

                <Card.Header> <h1>Actualizar Producto</h1> </Card.Header>
                {/* <h1 id="titulo2">Iniciar sesión</h1> */}
                <Card.Body>
                    <section className="update-products">
                        <form onSubmit={handleSubmit}>
                            <p>
                                <input
                                    className="control"
                                    type="text"
                                    name="id_product"
                                    placeholder={id_product}
                                    style={{ marginTop: '5px' }}
                                    onChange={handleChange} required
                                />
                            </p>
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
                                <input className="button" type="submit" name="create" value="Actualizar" />
                            </p>
                        </form>
                    </section>
                    <div>
                    </div>
                </Card.Body>
            </Card>
            <Foot />
        </>
    );
}