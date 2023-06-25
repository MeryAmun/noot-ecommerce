import { GET_ALL_PRODUCTS } from './constants'


export const reducer = (state = {products: []},action) => {
    switch (action.type) {
        case GET_ALL_PRODUCTS: 
        return { ...state, 
            products:action.payload.data,
           }
    
        default:
            return state
    }
}