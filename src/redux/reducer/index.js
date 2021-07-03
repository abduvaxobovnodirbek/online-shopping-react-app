import { combineReducers } from "redux";
import { ProductReducer, selectedReducer } from "./ProductReducer";
export const reducers = combineReducers({
    myAllProducts:ProductReducer,
    selectedItem:selectedReducer
})