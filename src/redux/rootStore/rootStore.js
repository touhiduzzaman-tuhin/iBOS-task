import { combineReducers } from "redux";
import { productReducer } from "../products/productReducer";

export const rootStore = combineReducers({
    products : productReducer
})