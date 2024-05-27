import React from 'react' //aca nel


export default function Term_condition(props) { //para agregar propiedades props
    // estandar de identacion de js son dos espacios
    return (
        <div className='contenedor-condition'>
            <p>
                <strong>{props.title}: </strong> {props.description}
            </p> 
        </div>
    );
}

