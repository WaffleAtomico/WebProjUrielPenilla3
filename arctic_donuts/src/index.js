import React from 'react';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import App from './App';
import Createacc from './pages/createacc';
import Login from './pages/login';
import Cart from './pages/cart';
import UpdateProduct from './pages/updateProduct';
// import Insert_user from './components/insert_user';

import { Errorurl } from './components/errorurl';
import Terms_conditions from './pages/terms_conditions';
import Adduser from './API/addusr';
import Updateuser from './API/updateusr';
import Users from './API/users';
  
import Admin_employees from './pages/adminEmployees';
import Admin_storage from './pages/adminStorage';

const router = createBrowserRouter([
  { //login
    path: '/',
    element: <Login />, 
    errorElement: <Errorurl />,   
  },
  { //create acount
    path: '/create_acount',
    element: <Createacc />,
  },
  { //AddUser
    path: '/addusr',
    element: <Adduser />,
  },
  { //UpdateUser
    path: '/updateusr',
    element: <Updateuser />,
  },
  { //UpdateUser
    path: '/users',
    element: <Users />,
  },
  { //Shoping cart
    path: '/cart/:email',
    element: <Cart />,
  },
  {
    path: '/terms_conditions',
    element: <Terms_conditions />
  },
  {
    path: '/admin_employees/:email',
    element: <Admin_employees />,
  },
  {
    path: '/update_product/:id_product',
    element: <UpdateProduct />,
  },
  {
    path: '/admin_storage/:email',
    element: <Admin_storage />
  }

]);




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <RouterProvider router={router} />  
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
