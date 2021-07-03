import { ActionTypes } from "../action-types/ActionTypes"

export const setProducts = (items)=>{
    return{
        type:ActionTypes.SET_PRODUCTS,
        payLoad:items
    }
}

export const selectedProduct = (item)=>{
    return{
        type:ActionTypes.SELECTED_PRODUCT,
        payLoad:item
    }
}