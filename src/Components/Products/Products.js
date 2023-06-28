import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../Redux/Store/Products";
import Product from "./Product";
import Cart from "../Cart/Cart";
import Pagination from "./Pagination";

const Products = () => {
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();
  const [productItems, setProductItems] = useState([]);

  useEffect(() => {
    dispatch(getProducts("https://fakestoreapi.com/products"));
  }, []);
  console.log("products", products);
  return (
    <section dir="ltr" className="py-10 my-9 bg-gray-100">
      <Cart />
      <div className="mx-auto grid w-[991px]  grid-cols-1 gap-6 p-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {productItems.map((product) => (
          <Product key={product.id} {...product} />
        ))}
      </div>
      <Pagination
        items={products}
        itemCountPerPage={8}
        setProductItems={setProductItems}
      />
    </section>
  );
};

export default Products;
