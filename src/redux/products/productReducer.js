import { CREATE_PRODUCT, DELETE_PRODUCT } from "./productType"

const initialState = {
    products : []
}

export const productReducer = (state = initialState, action) => {
    switch(action.type){
        case CREATE_PRODUCT:
            // console.log(action);
            const itemInformation = {
                name : action.payload.name,
                price : action.payload.price,
                uom : action.payload.uom,
                type : action.payload.type,
                id : state.products.length + 1
            }
            const itemInfo = [...state.products, itemInformation]
            return {
                ...state,
                products : itemInfo
            }
        
        case DELETE_PRODUCT:
            const deleteId = action.payload;
            const remainingItem = state.products.filter(item => item.id !== deleteId)
            return { products : remainingItem}

        default:
            return state;
    }
}