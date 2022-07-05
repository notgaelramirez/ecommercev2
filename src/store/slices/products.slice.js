import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const productsSlice = createSlice({
  name: 'products',
  initialState: [],
  reducers: {
    setProductsGlobal: (state, action) => action.payload
  }

})

export const { setProductsGlobal } = productsSlice.actions

export const getAllProducts = () => (dispatch) =>{
  return axios.get('https://ecommerce-api-react.herokuapp.com/api/v1/products')
    .then(res => dispatch(setProductGlobal(res.data.data.products)))
}

export default productsSlice.reducer