import React from "react";
import { Link } from "react-router-dom";

export function Errorurl()
{
    return(
        <div className="flex flex-col gap-2">
            <h1>Error</h1>
            <div> 404 not found </div>
            <Link to="/">Login</Link>
            {/* <a href="/">Home from A</a> */}
            {/* 
                Link no refresca la pagina completa
                href si refresca de nuevo todo
            */}
        </div>
    );
}