import axios from "axios";
import {
  productsError,
  productsFetched,
  productsLoading,
} from "../slices/productsSlice";

export const getProducts = () => {
  return async (dispatch) => {
    dispatch(productsLoading());
    const url = "https://fakestoreapi.com/products";
    try {
      const res = await axios.get(url);
      const data = res.data;
      dispatch(productsFetched(data));
    } catch (e) {
      dispatch(productsError(e.message));
    }
  };
};
