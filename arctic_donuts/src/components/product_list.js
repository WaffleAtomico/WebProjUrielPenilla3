
import React, { useState } from "react";

import '../styles/product.css';
import Product_list_product from "./product_list_product";


export default function Product_list(props)
{
    const products = props.products.filter(product => product.amount > 0);

    return(
        <div className="ticket-listofProducts"> 
             {
             products.map((product, index) =>
                <Product_list_product 
                    key={index}
                    img = {product.image} 
                    name = {product.name}
                    cantidad = {product.amount}
                    costo = {product.price}
                />
             )}
        </div>        
    );
}