
import React, { useState, useEffect } from "react";

import '../styles/product.css';
import Product_list_product from "./product_list_product";


export default function Product_list(props)
{
    useEffect(()=>{
        console.log("En product List "+props.products);
        console.log("En product cuenta "+props.clickCounts[16]);
    },[])
    // aqui no filtro por la cantidad, filtro por la cantidad de clicks en realidad
    const productsToList = props.products.filter(product => props.clickCounts[product.id_product] > 0);

    console.log("Estos se van a la lista:" + productsToList);

    return(
        <div className="ticket-listofProducts"> 
             {
             productsToList.map((product, index) =>
                <Product_list_product 
                    key={index}
                    img = {product.product_img_url} 
                    name = {product.product_name}
                    cantidadcompr = {props.clickCounts[product.id_product]}
                    costo = {product.product_cost}
                />
             )}
        </div>        
    );
}