/* eslint-disable no-sequences */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router';
import {Link} from "react-router-dom"
import "./Details.css"
import Spinner from "../Spinner/Spinner"
import {  useSelector } from 'react-redux';
import Modal from "../Modal/Modal"
import DarkMode from '../DarkMode/DarkMode';
export default function Details() {
    const [showDesabled,setDisabled] = useState(false)
    const [showModal,setShowModal] = useState(false)
    const [showItem,setShowItem] = useState([])
    const products = useSelector(state => state.myAllProducts.products)
    const productId = useParams()
    let showBtn = products.map(product=>product.inCart)
    let items = showItem.map(item=>{
        const {price,title,id,company,info,img} = item
        const handleClick =()=>{
            return products.map(product=>product)[productId.details-1].inCart = true, setDisabled(true);
        }
        const handleShow =()=>{
            handleClick();
            return setShowModal(true);
        } 
        let Confirmation,Darkish = null;
        if(showModal){
            Confirmation = <Modal/>
            Darkish = <DarkMode productId = {productId.details}/>
        }else{
            Confirmation = null;
            Darkish = null;
        }

     

        return (
            <div className="wrapper" key = {id}>
                 {Confirmation}
                 {Darkish}
                <div className = "details container">
                <img src= {img} alt="productImage" className = "detailImg img-fluid myImages"/>
                <div>
                    <h3 className = "bg-dark text-light p-2">{title}</h3>
                    <span>Made by: {company}</span>
                    <h3 style = {{fontWeight:'bold'}}>Price: <span className = "sp px-2">${price}</span></h3>
                    <span style = {{fontWeight:'600'}}>Some Info About Product:</span>
                    <p  style = {{fontWeight:'400'}}>{info}</p>
                    <Link to = "/">
                    <button className = "btn btn-outline-primary">Back To Product</button>
                    </Link>
                    <button disabled = {showDesabled?true:false,showBtn[productId.details-1]?true:false} onClick = {handleShow} className = "btn btn-outline-warning">{showBtn[productId.details-1]?'inCart':'add to cart'}</button>
                </div>
            </div>
            </div>
        )
    })
    
    const fetchData = ()=>{
        axios.get(`https://online-shopping-8d633-default-rtdb.firebaseio.com/${productId.details}.json`)
        .then(response=>{
            setShowItem([response.data])
        })
        .catch(err=>console.log('something went wrong',err))
    }
    useEffect(()=>{
        fetchData()
    },[productId.details])
    return (
        <div style = {{position:'relative',top:'100px'}}>
            {showItem.length ===0?<Spinner/>:items}
        </div>
    )
}
