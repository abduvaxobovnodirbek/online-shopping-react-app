import React from 'react'
import { useSelector } from 'react-redux'
import "./Cart.css"
import {Link} from "react-router-dom"
export default function Cart() {
    const products = useSelector(state => state.myAllProducts.products)
    
    let renderList = products.map(product=>{
         const handlePriceAdd = ()=>{
             product.count +=1 
        }
        const handlePriceRemove = ()=>{
            if(product.count<=1){
               return product.count
            }
            product.count -=1 
       }
        let showInfo = null;
        if(product.inCart){
            showInfo = <div className = "eachCart">
              <span>{product.title}</span>
              <span>${product.price*product.count}</span>
              <div className = "quantity">
                 <Link to = "/cart">
                  <button onClick = {handlePriceRemove}>-</button>
                 </Link> 
                  <button>{product.count}</button>
                  <Link to = "/cart">
                  <button onClick = {handlePriceAdd}>+</button>
                  </Link>
              </div>
              <div> 
              <Link to = "/cart">
              <i onClick = {()=>{
                  product.inCart = false
              }} class="fas fa-trash-alt text-danger"></i>
              </Link>
              </div>
              <span>Item Total:${product.price*product.count}</span>
            </div>
        }
        return(
            <div key = {product.id} style = {{position:'relative',top:'100px'}}>
                {showInfo}
            </div>
        )
    })

    let addingAll = products.filter(product=>product.inCart).map(product=>{
        return product.price*product.count
    }).reduce((arr,current)=>arr+current,0)
    return(
        <div className = "All">
            <h2 className = "text-center" style = {{position:'relative',top:'100px',fontWeight:'bold',display:products.find(product=>product.inCart)?'block':'none'}}>Your Cart</h2>
            <h2 style = {{position:'relative',top:'100px',fontWeight:'bold',display:products.find(product=>product.inCart)?'none':'block'}} className = "text-center">Your Cart is Currently Empty</h2>
            <div className="showCase container" style = {{fontWeight:'bold',display:products.find(product=>product.inCart)?'flex':'none'}}>
                <span>NAME OF PRODUCT</span>
                <span>PRICE</span>
                <span>QUANTITY</span>
                <span>REMOVE</span>
                <span>TOTAL</span>
            </div>
            <div className = "cart container text-center">
                <div className="thiscart">
            {renderList}
            </div>
            <div style = {{fontWeight:'bold',display:products.find(product=>product.inCart)?'block':'none',position:'relative',top:'110px'}} className = "container total">
                <Link to = "/cart">
                <button onClick= {()=>{
                    return products.map(product=>{
                        return product.inCart = false
                    })
                }} className = "btn btn-outline-danger ">Clear Cart</button>
                </Link>
                <Link to = "/form">
                <button className = "btn btn-outline-primary ">Purchase Items</button>
                </Link>
                 <span>Subtitle: ${addingAll}</span>
                <span>Tax: ${addingAll/10}</span>
                <span>Total: ${addingAll+addingAll/10}</span> 
            </div>
            </div>
        </div>
    )
}

