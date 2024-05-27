import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

export default function Product_list_product(props) {
    return (
        <div className="ticket-product">
         <Col xs={6} md={4} style={{fontSize: '25px', marginBottom: '4px'}}>
                <Image src={require(`../img/dona-${props.img}.png`)} style={{height: '3rem'}} thumbnail />
                {props.name}
            </Col>           
            <div style={{fontSize: '29px'}}>
                Compraste: {props.cantidad}
            </div>
            <div style={{fontSize: '30px'}}>
                ${props.costo}
            </div>          
        </div>
    );
}