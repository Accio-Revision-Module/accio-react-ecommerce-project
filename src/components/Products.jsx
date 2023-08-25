/* eslint-disable react-hooks/exhaustive-deps */
import { useDispatch, useSelector } from "react-redux";
import Product from "./Product";
import { useEffect } from "react";
import { getProducts } from "../store/actions/productActions";

function Products() {
  const productsState = useSelector((state) => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  return (
    <div className="my-5 mx-8">
      <h2 className="text-xl font-bold text-center">All Products</h2>
      <div className="flex gap-8 justify-center flex-wrap align-stretch">
        {productsState?.loading && <div>Loading...</div>}
        {productsState?.items?.map((e) => (
          <Product product={e} key={e.id} />
        ))}
      </div>
    </div>
  );
}

export default Products;
