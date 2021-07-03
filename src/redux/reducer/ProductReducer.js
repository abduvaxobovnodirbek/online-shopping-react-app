import { ActionTypes } from "../action-types/ActionTypes";

const initialState = {
    products:[]
}
export const ProductReducer = (state = initialState,{type,payLoad})=>{
    switch (type) {
        case ActionTypes.SET_PRODUCTS:
            return {...state,products:payLoad};
        default:
            return state;
    }
}

export const selectedReducer = (state = {show:false},{type,payLoad})=>{
    switch (type) {
        case ActionTypes.SELECTED_PRODUCT:
            return {...state,show:payLoad};
        default:
            return state;
    }
}