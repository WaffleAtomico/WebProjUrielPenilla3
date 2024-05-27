import { useState } from 'react';
import { Link, useNavigate, useParams } from "react-router-dom";
import { Foot, Head } from "../components/headfoot";
import Button from 'react-bootstrap/Button';

import { HiOutlineLogin } from "react-icons/hi";


import Product from "../components/product";


import '../styles/product.css';
import Ticket from '../components/ticket';

export default function Cart() {

    // const navigate  = useNavigate();
    const { email } = useParams();

    const [clickCounts, setClickCounts] = useState({1: 0, 2: 0, 3: 0});
    const [totalValues, setTotalValues] = useState({1: 0, 2: 0, 3: 0});
    

    const poductsName = {1:'Dona DIWK', 2:'Dona Arabella', 3:'Dona SIAS'};

    // Do i wanna know
    // Arabella
    // Suck it and see
    const productsPrice = {1: 29, 2: 29, 3: 24};
    const productsImage = {1: 1, 2: 2, 3: 3};

    const [visible, setVisibilty] = useState(false);
    const totalPrice = Object.values(totalValues).reduce((a, b) => a + b, 0);

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

    const handleTicket = (PtoBD) =>
    {
        // email
        // PtoBD 
        setVisibilty(visible => !visible);
    }

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
            <div style={{visibility: visible ?  'visible' : 'hidden'}}>
                <Ticket 
                    user = {email}
                    products = {[
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
                    ]}
                totalValue= {totalPrice}
                onButtonClick={handleTicket}
                />
            </div>

            <Link to="/" >
                <Button variant="primary" size="lg" className="inic">
                    <HiOutlineLogin />
                </Button>
            </Link>       

            <div className="grid-container">
                <Product 
                    img= {productsImage[1]}
                    title= {poductsName[1]}
                    desc= {productsPrice[1]}
                    cantidad= {40}
                    onIncrease={() => handleProductIncrease(1, productsPrice[1])}
                    onDecrease={() => handleProductDecrease(1, productsPrice[1])}
                    total= {totalValues[1]}
                />
                
                <Product 
                    img= {productsImage[2]}
                    title= {poductsName[2]}
                    desc= {productsPrice[2]}
                    cantidad= {40}
                    onIncrease={() => handleProductIncrease(2, productsPrice[2])}
                    onDecrease={() => handleProductDecrease(2, productsPrice[2])}
                    total= {totalValues[2]}
                />  
                
                <Product 
                    img= {productsImage[3]}
                    title= {poductsName[3]}
                    desc= {productsPrice[3]}
                    cantidad= {40}
                    onIncrease={() => handleProductIncrease(3, productsPrice[3])}
                    onDecrease={() => handleProductDecrease(3, productsPrice[3])}
                    total= {totalValues[3]}
                />               
            </div>    
            <div className="cart-price" style={{visibility: totalPrice > 0 ? 'visible' : 'hidden'}} >
                <h1>Precio a pagar: ${totalPrice}
                    <Button variant="info" size='lg' onClick={handleTicket}>Pagar</Button >
                </h1>
            </div>
            <Foot />
        </>
    );
}



 
