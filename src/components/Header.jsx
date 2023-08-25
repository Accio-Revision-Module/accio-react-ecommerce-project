import { useDispatch } from "react-redux";
import { searchProducts } from "../store/slices/productsSlice";

function Header() {
  const dispatch = useDispatch();

  const searchProductsFn = (e) => {
    dispatch(searchProducts(e.target.value));
  };

  return (
    <div className="main flex-column item-center justify-center bg-black">
      <div className="text-6xl font-bold text-center mb-8">
        Example Ecommerce.
      </div>
      <hr className="w-1/4 m-auto" />
      <div className="width-1 flex justify-center mt-8">
        <input
          type="search"
          onChange={searchProductsFn}
          placeholder="Search for products..."
          className="m-auto p-1 rounded w-1/4 text-lg"
        />
      </div>
    </div>
  );
}

export default Header;
