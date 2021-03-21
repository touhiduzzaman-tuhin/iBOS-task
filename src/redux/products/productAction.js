import { CREATE_PRODUCT, DELETE_PRODUCT } from "./productType"

export const createProduct = (item) => {
    return {
        type : CREATE_PRODUCT,
        payload : item
    }
}

export const deleteProduct = (id) => {
    return {
        type : DELETE_PRODUCT,
        payload : id
    }
}