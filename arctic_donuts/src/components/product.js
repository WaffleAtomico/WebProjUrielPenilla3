import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { CgMathPlus, CgMathMinus } from "react-icons/cg";
import Badge from 'react-bootstrap/Badge';

import '../styles/product.css';
import { useState } from 'react';

export default function Product(props){

    const [nclic, setNumClics] = useState(0);

    const manejarClic = () => {
        if (nclic < props.cantidad) {
            setNumClics(nclic+1);
            props.onIncrease();
        }        
        
    }
    const reducirClic = () => {
        if (nclic > 0) {
            setNumClics(nclic-1);
            props.onDecrease();
        }
    }

    return (
        <>
            <div className="productContainerStyles">
                <Card style={{ width: '18rem' }}>
                    {/* Cambiar por href */}
                <Card.Img variant="top" src={props.img} style={{height: '180px'}} />
                <Card.Body>
                    <Card.Title>{props.title}</Card.Title>
                    <Card.Text style={{fontSize: '30px'}}>
                        ${props.desc}
                    </Card.Text>
                    <div className='product-actions' style={{display: 'flex', justifyContent: 'space-around'}}>
                    <Button variant="danger" style={{borderRadius: '50%', visibility: nclic > 0 ? 'visible' : 'hidden'}} onClick={reducirClic}>
                        <CgMathMinus />  
                    </Button>                
                    <Badge bg="secondary" style={{fontSize: '20px'}}>{nclic}</Badge>
                    <Button variant="success" style={{borderRadius: '50%', visibility: nclic < props.cantidad ? 'visible' : 'hidden'}} onClick={manejarClic}>
                        <CgMathPlus />
                    </Button> 
                    </div>
                </Card.Body>
                </Card>
            </div>
        </>
    );
}
