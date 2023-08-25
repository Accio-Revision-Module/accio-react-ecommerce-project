import { useDispatch, useSelector } from "react-redux";
import { addToCartAction, checkInCart } from "../store/actions/cartActions";
import { removeFromCart } from "../store/slices/cartSlice";
import { auth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";

/* eslint-disable react/prop-types */
function Product({ product }) {
  const [user] = useAuthState(auth);
  const cartState = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleAdd = () => {
    if (checkInCart(cartState.items, product.id)) {
      dispatch(removeFromCart());
      return;
    }
    dispatch(addToCartAction(user.uid, product.id));
  };

  return (
    <div className="w-1/5 h-fit bg-gray-500 rounded my-5 overflow-x-hidden">
      <img className="max-w-full" src={product.image} />
      <div className="p-3">
        <h2 className="text-regular">{product.title}</h2>
        <p className="text-xl font-bold mt-2">${product.price}</p>
      </div>
      <div className="flex gap-4">
        <button onClick={handleAdd} className="flex-1 rounded">
          {checkInCart(cartState?.items, product.id)
            ? "In Cart"
            : "Add to Cart"}
        </button>
        <button className="flex-1 rounded">Buy now</button>
      </div>
    </div>
  );
}

export default Product;
