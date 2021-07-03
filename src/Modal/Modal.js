/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect,useState } from 'react'
import "./Modal.css"
import {Link, useParams} from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import Spinner2 from "../Spinner2/Spinner2"
import {setProducts} from "../redux/action/Action"
import { storeProducts } from '../data'
export default function Modal({show}) {
    const [showItem,setShowItem] = useState([])
    const productId = useParams()
    const products = useSelector(state => state.myAllProducts.products)
    const dispatch = useDispatch()
    const fetchData = ()=>{
        axios.get(`https://online-shopping-8d633-default-rtdb.firebaseio.com/${productId.details}.json`)
        .then(response=>{
            setShowItem([response.data])
            dispatch(setProducts(storeProducts))
        })
        .catch(err=>console.log('something went wrong',err))
    }
    useEffect(()=>{
        fetchData()
    },[productId.details])
    let renderList = showItem.map(item=>item.img)
    return (
        <div className="wrapper" style = {{display:show?'block':'none'}}>
            <div className = "content-box">
            <div className="content">
                <h3 style = {{fontWeight:'bold'}}>Item Added to Cart</h3>
                <h4>{products.map(product=>product)[productId.details-1].title}</h4>
                {Object.keys(showItem).length ===0?<Spinner2/>:<img className = "imgg" src={renderList} alt="myImage"/>}
                <span>Price:${products.map(product=>product)[productId.details-1].price}</span>
                <Link to = "/">
                <button className = "btn btn-outline-primary">Continue Shopping</button>
                </Link>
                <Link to = "/cart">
                <button className = "btn btn-outline-warning">Go to Cart</button>
                </Link>
            </div>
        </div>
        </div>
    )
}
