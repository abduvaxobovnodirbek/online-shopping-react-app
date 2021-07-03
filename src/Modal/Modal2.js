import React, {useState } from 'react'
import "./Modal.css"
import "./Modal2.css"
import {Link} from "react-router-dom"
 function Modal2() {
    const [showModal,setShowModal] = useState(true)
    return (
        <Link to = "/">
            <div className="wrapper wrap-me" style = {{display:showModal?"block":'none'}} onClick = {()=>setShowModal(false)}>
            <div className = "content-box"  style = {{display:showModal?"block":'none'}}>
            <div className="content">
                <h3 style = {{fontWeight:'bold'}}>Success!!!</h3>
                <h4>Item Added to Cart</h4>
                <Link to = "/cart">
                <button className = "btn btn-outline-warning"  onClick = {()=>{
                    return setShowModal(false)
                }}>Go to Cart</button>
                </Link>
            </div>
        </div>
        </div>
        </Link>
    )
}

export default Modal2;


