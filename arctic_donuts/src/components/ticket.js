import { CLIENT_ID } from '../Config/config';
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

import React, { useState, useEffect } from "react";
import Button from 'react-bootstrap/Button';
import { MdCancelPresentation } from "react-icons/md";

import '../styles/ticket.css';
import Product_list from './product_list';
import axios from 'axios';

/*
Tutorial visto

https://episyche.com/blog/how-to-integrate-paypal-with-react-application

*/

export default function TicketView(props)
{
    // const [show, setShow] = useState(true);
    const [success, setSuccess] = useState(false);
    const [ErrorMessage, setErrorMessage] = useState("");
    const [orderID, setOrderID] = useState(false);

    // creates a paypal order
    const createOrder = (data, actions) => {
        // const valueToUSD  = Math.floor(props.totalValue*0.055);
        // console.log(valueToUSD);
        return actions.order.create({
            purchase_units: [
                {
                    description: "Arctic_Donuts Purchase", 
                    amount: {
                        currency_code: "USD",
                        value: props.totalValue, //
                    },
                },
            ],
        }).then((orderID) => {
                setOrderID(orderID);
                return orderID;
            });
    };

    // check Approval
    const onApprove = (data, actions) => {
        return actions.order.capture().then(function (details) {
            const { payer } = details;
            setSuccess(true);
            console.log("Productos actualizados "+productsToBD);
            updateProductsData(productsToBD);
        });
    };
/*
sb-cxuhq31113960@personal.example.com
Q2G8^_*t
*/
    const updateProductsData = (productsToUpdate) =>
    {
        productsToUpdate.forEach(async product => {
            console.log("Actualizando producto " + product.id_product);
            console.log("Cantidad comprada "+props.clickCounts[product.id_product] );
            const newAmount = (product.product_amount ) - (props.clickCounts[product.id_product]);
            console.log("Nueva cantidad "+newAmount);
            const dataupdate = 
            {
                product_amount: newAmount,
                id_product: product.id_product,
            }
            try {
                const response = await axios.post("http://localhost:3001/updateamount", dataupdate);
                console.log(response);
            } catch (err) {
                console.log(err);
            }
        });
    }

    //capture likely error
    const onError = (data, actions) => {
        setErrorMessage("An Error occured with your payment ");
    };

    useEffect(() => {
        if (success) {
            // alert("Payment successful!!");
            console.log('Order successful . Your order id is--', orderID);
            props.onButtonClick(productsToBD);
        }
    },[success]);

    useEffect(()=>{
        console.log("Recibi esta informacion en el ticket "+props.products);
    },[]);

    const productsToBD = props.products.filter(product => props.clickCounts[product.id_product] > 0);
    
    // Para al dar click, ejecutar la query y guardar en la bd el pago del usuario de que productos 
    // junto con toda la informacion relacionada
    

    /*
sb-qn5x731123107@business.example.com
5gJuOd6)

sb-qn5x731123107@business.example.com
5gJuOd6)


    */
    
    return(
        <PayPalScriptProvider options={{ "client-id": CLIENT_ID }}>
            <div className="ticket-frame">
                <Button variant="danger" size="lg" 
                    style={{borderRadius: '70%'}} 
                    onClick={props.onButtonClick} >
                        <MdCancelPresentation />
                </Button>
                <div className='ticket-list'>
                    <Product_list 
                        products = {props.products}
                        clickCounts={props.clickCounts}
                    />
                </div>
                <div className="d-grid gap-2">
                    <h2>Precio total a pagar: ${props.totalValue}</h2>
                    {/* <Button variant="success" size="lg" onClick={props.onButtonClick(productsToBD)}>
                                              
                    </Button> */}
                    {props.visible ? (
                        <PayPalButtons 
                            style={{ layout: "vertical" }}
                            createOrder={createOrder}
                            onApprove={onApprove}
                        />
                    ) : null}
                </div>
            </div>
        </PayPalScriptProvider>
        );
}