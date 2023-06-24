import { GET_ALL_PRODUCTS } from "./constants"


export const getProducts = (page) => async (dispatch) => {
    try {
      const { data } = await api.fetchPosts(page)
   
      dispatch({ type: GET_ALL_PRODUCTS, payload: data })

    } catch (error) {
      console.log(error.message)
    }
  }