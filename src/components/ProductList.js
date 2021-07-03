import React from 'react'
import { useDispatch } from 'react-redux'
import Product from "./Product"
import Title from './Title'
import {setProducts} from "../redux/action/Action"
import { storeProducts } from '../data'

export default function ProductList() {
    const dispatch = useDispatch()
    dispatch(setProducts(storeProducts))
    return (
        <div style = {{position:'relative',top:'80px'}}>
          <Title name = "our" title = "products"/>
          <Product/>
        </div>
    )
}

