import React, { useState } from 'react'
import "./DarkMode.css"
import Modal from "../Modal/Modal"
export default function DarkMode(props) {
    const [show,setShow] = useState(true)
    const handleClick = ()=>{
        setShow(false)
    }
    return (
            <div>
                <Modal 
                 show = {show}
                 productId = {props.productId.details}
                />
                <div className = "darkmode" style = {{display:show?'block':'none'}} onClick = {handleClick}></div>
            </div>
    )       
}
