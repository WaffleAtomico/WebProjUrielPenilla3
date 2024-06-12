import React from "react";
import Employees from '../components/admin_employees';
import { Foot, Head } from "../components/headfoot";
import '../styles/table.css';


export default function admin_Employees(params) {

    // Mostrar todos los empleados, exepto el actual

    return (
        <>
            <Head />
            <br/>
            <h1 >Empleados</h1>
            <Employees />
            <Foot />
        </>
    );
}