import useQueryHook from "../utils/useQueryHook"
import { GET_ALL_PRODUCTS } from "./constants"

export const getProducts = () => async (dispatch) => {

    try {
      const  productData  = await useQueryHook()
      
      dispatch({ type: GET_ALL_PRODUCTS, payload:productData })

    } catch (error) {
      console.log(error)
    }
  }