import '../styles/table.css'; //Importar el estilo correcto
import { useEffect, useState } from 'react';
import React from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { IoMdAddCircleOutline } from "react-icons/io";
import { Foot, Head } from "../components/headfoot";
import CreateProduct from "../components/add_product";


export default function AdminStorage() {
    const { email } = useParams();

    const [products, SetProducts] = useState([]);
    const [visible, setVisibilty] = useState(false);
    
    const fetchAllProducts = async () => {
        try {
            // console.log(email);
            const res = await axios.get("http://localhost:3001/allproducts");
            console.log("respuesta ", res.data);
            SetProducts(res.data);
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {  
        fetchAllProducts();
    }, []);

    console.log(products);

    const handleDelete = async (id_product) => {
        try {
            console.log(id_product);
            await axios.post("http://localhost:3001/delete-product", { id_product: id_product });
            fetchAllProducts();
        } catch (err) {
            console.log(err);
        }
    };

    // const handleFormCreate = () =>
    // {
    //     setVisibilty(visible => !visible);
    // }

    return (
        <div>
            {visible && <div style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                zIndex: 999
            }} >   
                <div style={{visibility: visible ?  'visible' : 'hidden'}}>
                    <CreateProduct
                        user_mail= {email}
                        setVisibilty= {setVisibilty}
                        fetchAllProducts={fetchAllProducts}
                    />
                </div>
            </div> }  

            <Head />
            <br />

            <div onClick={()=>setVisibilty(visible => !visible)} style={{cursor: "pointer"}} >
                <h1>
                     <IoMdAddCircleOutline />
                    {/* <Button variant="info" size='lg' >Pagar</Button > */}
                </h1>
            </div>

            <h1 >Productos</h1>
            
            <table>

                <thead align="center">
                    <tr>
                        <th> Imagen </th>
                        <th> Identificador </th>
                        <th> Nombre </th>
                        <th> Costo </th>
                        <th> Cantidad </th>
                        <th> Eliminar </th>
                    </tr>
                </thead>

                <tbody align="center" className="">
                    {products.map((product) => (
                        <tr key={product.id_product}>
                            <td><img src={product.product_img_url}></img></td>
                            <td>{product.id_product}</td>
                            <td>{product.product_name}</td>
                            <td>{product.product_cost}</td>
                            <td>{product.product_amount}</td>
                            <td>
                            <p className="delete" onClick={() => handleDelete(product.id_product)} >
                                <MdOutlineDeleteOutline style={{ fontSize: '52px' }}/>
                            </p>
                            </td>
                        </tr>
                    ))
                    }
                </tbody>
            </table>
            <br /> <br /> <br /> <br /> <br />
            <Foot />
        </div>
    );
};

// export default Users;