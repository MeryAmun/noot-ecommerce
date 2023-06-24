import { GET_ALL_PRODUCTS } from './constants'


export const reducer = (state = {products: null},action) => {
    switch (action.type) {
        case GET_ALL_PRODUCTS: 
        return { ...state, 
            posts:action.payload.data,
           }
    
        default:
            return state
    }
}