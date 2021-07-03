/* eslint-disable no-unused-vars */
import React, {useState } from 'react'
import {  useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import "./Product.css"
import Modal2 from "../Modal/Modal2"
export default function Product() {
    const [showModal2,setShowModal2] = useState(false)
    const products = useSelector(state => state.myAllProducts.products)

    let renderList = products.map(product=>{
        const {img,id,price,title,inCart} = product;
        
        const handleClicked =()=>{
            product.inCart = true
            return setShowModal2(true)
        }
         
        return(
            <React.Fragment  key = {id}> 
                <div  className = "content thisContent"> 
              <Link to = {`/product/${id}`} className = "Link"><img src={img} alt="productImage"/></Link>
              <Link to = "/">
              <button disabled = {inCart?true:false} onClick = {handleClicked} className = "myBtn btn btn-small bg-primary text-light">{inCart?<span>In Cart</span>:<i className = "fas fa-cart-plus"></i>}</button>
              </Link>
              <div className="titleInfo bg-dark p-2 text-light">
              <span className = "d-block">{title} ${price}</span>
              </div>
            </div>
            </React.Fragment>
        )
    })
   

let showing = null;
if(showModal2){
    showing = <Modal2/>
}
    return (
        <div style = {{position:'relative',top:'40px'}} className = "container myProduct">
            {renderList}
            {showing}
        </div>
    )
}
