import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import "./Form.css"
export default class Form extends Component {
    state = {
          name:'',
          email:'',
          gender:'',
          payment:'',
          cardNumber:'',
          cardCvc:'',
    }
    
    handleWrite = (e)=>{
        const {name,value,checked} = e.target
        e.type === 'text'||"email"||"number"?this.setState({
            [name]:value
        }):e.type === "radio"?this.setState({
            [checked]:value
        }):this.setState({...this.state.person})
    }
    handleSubmit = (e)=>{
        e.preventDefault()
        this.setState({
            ...this.state
        })
        console.log(this.state);
    }
    handleDisabled = ()=>{
        let register =   Object.keys(this.state).map(item=>{
            return this.state[item] !== "" && this.state[item].trim('') !=="" 
        }).every(item=>item === true)
        return register
        
    }
    
    render() {
     let showItem = false;
     console.log(showItem);
        return (
            <div className = "wrapr container">
<div className="container1" >
  <form onSubmit = {this.handleSubmit}>
    <div className="row">
      <h4>Account</h4>
      <div className="input-group input-group-icon">
        <input type="text" name = "name" placeholder="Full Name" value = {this.state.name} onChange = {this.handleWrite}/>
        <div className="input-icon"><i className="fa fa-user"></i></div>
      </div>
      <div className="input-group input-group-icon">
        <input type="email" name = "email" value = {this.state.email} placeholder="Email Adress"  onChange = {this.handleWrite}/>
        <div className="input-icon"><i className="fa fa-envelope"></i></div>
      </div>
     
    </div>
    <div className="row">
      
      <div className="col-half">
        <h4>Gender</h4>
        <div className="input-group">
          <input id="gender-male" type="radio" name="gender" onChange = {this.handleWrite} value="male"/>
          <label for="gender-male">Male</label>
          <input id="gender-female" onChange = {this.handleWrite} type="radio" name="gender" value="female"/>
          <label for="gender-female">Female</label>
        </div>
      </div>
    </div>
    <div className="row">
      <h4>Payment Details</h4>
      <div className="input-group">
        <input id="payment-method-card" onChange = {this.handleWrite} type="radio" name="payment" value="card"/>
        <label for="payment-method-card"><span><i className="fa fa-cc-visa"></i>Credit Card</span></label>
        <input id="payment-method-paypal" onChange = {this.handleWrite} type="radio" name="payment" value="paypal"/>
        <label for="payment-method-paypal"> <span><i className="fa fa-cc-paypal"></i>Paypal</span></label>
      </div>
      <div className="input-group input-group-icon">
        <input type="number" name = 'cardNumber' onChange = {this.handleWrite} placeholder="Card Number"/>
        <div className="input-icon"><i className="fa fa-credit-card"></i></div>
      </div>
      <div className="col-half">
        <div className="input-group input-group-icon">
          <input type="number" name = "cardCvc" onChange = {this.handleWrite} placeholder="Card CVC"/>
          <div className="input-icon"><i className="fa fa-user"></i></div>
        </div>
      </div>
      <div className="col-half">
        <div className="input-group">
          <select>
            <option>01 Jan</option>
            <option>02 Jan</option>
          </select>
          <select>
            <option>2015</option>
            <option>2016</option>
          </select>
        </div>
      </div>
    </div>
    
    <button onClick = {()=>{
        alert(`${this.state.name} you have successfully purchased our product, soon we will contact you via ${this.state.email}`)
    }} disabled = {!this.handleDisabled()} className = "btn myBB">
      <Link to = "/" className = 'my-link'>Submit</Link>
    </button>
  </form>
</div>
 </div>
        )
    }
}
