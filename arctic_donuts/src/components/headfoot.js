import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import '../styles/headfoot.css'
function Foot()
{
    return(
        <div className="foot-text">
            <footer>
                {/* Cambiar los Links, al menos el de terminos y condiciones */}
                <Link to="/terms_conditions" className="floatR"> Terminos y Condiciones </Link>              
                <img className="iconfooter" src=""/>
                <a className="floatL">Copyright 2024</a>                
            </footer>
        </div>
    );
}
// npm i @paypal/react-paypal-js
function Head_Navbar()
{
    return(
        <div className="navbar">
                {/*
                  Agregar la navbar abajo del header
                */}
                
        </div>
    );
}
function Head()
{
    return(
        <div className="head">
            <header className="head-badge">
                ARCTIC DONUTS
            </header>            
        </div>
    );
}


export {Foot, Head_Navbar, Head};