import { collection, addDoc, getDocs, query, where } from "firebase/firestore";
import { db } from "../../firebase";
import { addToCart, updateCart } from "../slices/cartSlice";

export const addToCartAction = (user_id, product_id) => async (dispatch) => {
  try {
    await addDoc(collection(db, "cart"), {
      user_id,
      product_id,
    });
    dispatch(addToCart(product_id));
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};

export const getCartItems = (user_id) => async (dispatch) => {
  const cartItems = [];
  const q = query(collection(db, "cart"), where("user_id", "==", user_id));
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    cartItems.push(doc.data().product_id);
  });
  dispatch(updateCart(cartItems));
};

export const checkInCart = (items, product_id) => {
  return items.includes(product_id);
};
