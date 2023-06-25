import { GET_ALL_PRODUCTS } from "./constants"


export const getProducts = (data) => async (dispatch) => {
    try {
      console.log(data)
      dispatch({ type: GET_ALL_PRODUCTS, payload:data })

    } catch (error) {
      console.log(error)
    }
  }