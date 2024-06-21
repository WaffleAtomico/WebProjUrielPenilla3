import { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from "react-router-dom";
import { Foot, Head } from "../components/headfoot";
import Button from 'react-bootstrap/Button';
import axios from 'axios';

import { HiOutlineLogin } from "react-icons/hi";


import Product from "../components/product";


import '../styles/product.css';
import TicketView from '../components/ticket';

export default function Cart() {

    // const navigate  = useNavigate();
    const { email } = useParams();

    // const [clickCounts, setClickCounts] = useState({1: 0, 2: 0, 3: 0});
    // const [totalValues, setTotalValues] = useState({1: 0, 2: 0, 3: 0});
    const [clickCounts, setClickCounts] = useState({});
    const [totalValues, setTotalValues] = useState({});
    
/*
    const poductsName = { 1: 'Dona DIWK', 2: 'Dona Arabella', 3: 'Dona SIAS' };
    const productsPrice = { 1: 29, 2: 29, 3: 24 };
    const productsImage = { 1: 1, 2: 2, 3: 3 };
*/

    const [visible, setVisibilty] = useState(false);
    const totalPrice = Object.values(totalValues).reduce((a, b) => a + b, 0);


    const [products, setProducts] = useState([]);

    const handleProductIncrease = (productId, price) => {
        const newCount = clickCounts[productId] + 1;
        setClickCounts({
            ...clickCounts,
            [productId]: newCount
        });
        setTotalValues({
            ...totalValues,
            [productId]: newCount * price
        });
    }

    const handleProductDecrease = (productId, price) => {
        if (clickCounts[productId] > 0) {
            const newCount = clickCounts[productId] - 1;
            setClickCounts({
                ...clickCounts,
                [productId]: newCount
            });
            setTotalValues({
                ...totalValues,
                [productId]: newCount * price
            });
        }
    }

    const handleTicket = (PtoBD) => {
        // email
        // PtoBD 
        setVisibilty(visible => !visible);
    }

    // Se pueden jalar donas de: https://www.panarte.mx/productos/donas 

    useEffect(() => {
        axios.post('http://localhost:3001/aviable-products')
            .then(response => {
                const products = response.data;
                setProducts(products); // Asigna los datos al estado de productos aquí

                const clickCounts = {};
                const totalValues = {};

                products.forEach((product) => {
                    clickCounts[product.id_product] = 0;
                    totalValues[product.id_product] = 0;
                });

                setClickCounts(clickCounts);
                setTotalValues(totalValues);
                //console.log("productos desde cart"+products); // Ahora puedes ver los productos aquí
                console.log(clickCounts);
                console.log(totalValues);
            })
            .catch(error => {
                console.error(error);
            });
    }, []);

    return (
        <>
            {visible && <div style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                zIndex: 999
            }} />}
            <Head />
            <div style={{ visibility: visible ? 'visible' : 'hidden' }}>
                <TicketView
                    user={email}
                    products={products}
                    {...console.log("productos desde cart"+products)}
                    /*products={[
                        {
                            image: productsImage[1],
                            name: poductsName[1],
                            amount: clickCounts[1],
                            price: productsPrice[1]
                        },
                        {
                            image: productsImage[2],
                            name: poductsName[2],
                            amount: clickCounts[2],
                            price: productsPrice[2]
                        },
                        {
                            image: productsImage[3],
                            name: poductsName[3],
                            amount: clickCounts[3],
                            price: productsPrice[3]
                        }
                    ]}*/
                    visible={visible}
                    totalValue={totalPrice}
                    onButtonClick={handleTicket}
                />
            </div>

            <Link to="/" >
                <Button variant="primary" size="lg" className="inic">
                    <HiOutlineLogin />
                </Button>
            </Link>

            <div className="grid-container">

                {products.map((product) => (
                    <div key={product.id_product}>
                        <Product
                            img={product.product_img_url}
                            title={product.product_name}
                            desc={product.product_cost}
                            cantidad={product.product_amount}
                            onIncrease={() => handleProductIncrease(product.id_product, product.product_cost)}
                            onDecrease={() => handleProductDecrease(product.id_product, product.product_cost)}
                            total={totalValues[1]}
                        />
                    </div>
                ))}

            </div>
            <div className="cart-price" style={{ visibility: totalPrice > 0 ? 'visible' : 'hidden' }} onClick={handleTicket} >
                <h1>Confirmar pedido: ${totalPrice}
                    {/* <Button variant="info" size='lg' >Pagar</Button > */}
                </h1>
            </div>
            <Foot />
        </>
    );
}