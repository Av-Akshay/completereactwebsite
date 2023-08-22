import React from "react";
import Gridview from "../GridView";
import Listview from "../ListView";
import { useSelector } from "react-redux";

const ProductList = () => {
  const data = useSelector((store) => store.products);
  const { filter_products, grid_view } = data;
  if (grid_view === true) {
    return <Gridview products={filter_products} />;
  }
  if (grid_view === false) {
    return <Listview products={filter_products} />;
  }
};

export default ProductList;
