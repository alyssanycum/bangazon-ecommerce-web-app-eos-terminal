import React from "react";
import { Route } from 'react-router-dom';
import Login from "./auth/Login";
import Register from "./auth/Register";
import ProductForm from "./products/ProductForm";


const ApplicationViews = (props) => {

    return(
        <>
        <Route path="/ " render={props => {
            return <p>Home Page</p>
        }}/>
        <Route path="/addproduct" render={props => {
            return <ProductForm { ...props }/>
        }}/>
        <Route path="/categories" render={props => {
            return <p>Product Categories</p>
        }}/>
        <Route path="/cart" render={props => {
            return <p>My Shopping Cart</p>
        }}/>
        <Route path="/myaccount" render={props => {
            return <p>My Account</p>
        }}/>
        <Route path="/login" render={props => {
             return <Login {...props}/>
        }}/>
        <Route path="/register" render={props => {
            return <Register {...props}/>
        }}/>
        </>
    )
}

export default ApplicationViews;