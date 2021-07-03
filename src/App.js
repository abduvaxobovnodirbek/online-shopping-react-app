import React from 'react'
import {Route,Switch} from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css"
import { Auxx } from './Auxx/Auxx';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import Details from './components/Details';
import Cart from './components/Cart';
import Default from './components/Default';
import Form from "./components/Register/Form"

export default function App() {
  return (
    <Auxx>
      <Navbar/>
      <Switch>
        <Route path = "/" exact component = {ProductList}/>
        <Route path = "/product/:details" exact component = {Details}/>
        <Route path = "/cart" exact component = {Cart}/>
        <Route path = "/form" exact component = {Form}/>
        <Route component = {Default}/>
      </Switch>
    </Auxx>
  ) 
}
