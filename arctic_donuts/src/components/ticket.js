import Button from 'react-bootstrap/Button';
import { MdCancelPresentation } from "react-icons/md";

import '../styles/ticket.css';
import Product_list from './product_list';


export default function ticket(props)
{

    const productsToBD = props.products.filter(product => product.amount > 0);
    
    // Para al dar click, ejecutar la query y guardar en la bd el pago del usuario de que productos 
    // junto con toda la informacion relacionada

    return(
        <div className="ticket-frame">
            <Button variant="danger" size="lg" 
                style={{borderRadius: '70%'}} 
                onClick={props.onButtonClick}>
                    <MdCancelPresentation />
            </Button>
            <div className='ticket-list'>
                <Product_list 
                    products = {props.products}
                />
            </div>
            <div className="d-grid gap-2">
                <Button variant="success" size="lg" onClick={props.onButtonClick(productsToBD)}>
                    Pagar ${props.totalValue}
                </Button>
            </div>
        </div>
        );
}