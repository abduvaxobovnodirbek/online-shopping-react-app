import React, { Component } from 'react'
import {Link} from "react-router-dom"
import "../App.css"
class Navbar extends Component {
    render() {
        return (
            <nav className = "p-2 text-light">
                <div className="container">
                    <div className="myNav">
                    <div className="logo">
                     <Link to = "/" style = {{color:'white',textDecoration:'none'}}>
                     <i className="fab fa-ups"></i>  
                     </Link>   
                     <div className="products">
                      <Link to = "/" style = {{color:'white',textDecoration:'none'}}>
                       <span>Products</span>
                      </Link>
                    </div>
                    </div>
                    <Link to = "/cart" className = "bg-outline border text-light" style = {{textDecoration:'none'}}>
                    <button className = "btn  m-0 text-light"> <i className="fas fa-cart-plus"></i> My-Cart</button>
                    </Link>
                    </div>
                </div>
            </nav>
        )
    }
}

export default Navbar
