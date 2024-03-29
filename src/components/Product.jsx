import React from "react";
import { NavLink } from "react-router-dom";
import FormatePrice from "../helpers/FormatePrice";

const Product = (curElem) => {
  const { id, name, image, price, category } = curElem;

  return (
    <NavLink className="single-product--link" to={`/Singleproduct/${id}`}>
      <div className="card">
        <figure>
          <img
            src={image}
            alt={name}
            style={{ width: "100%", maxHeight: "126px" }}
          />
          <figcaption className="caption">{category}</figcaption>
        </figure>
        <div className="card-data">
          <div className="card-data-flex">
            <h3>{name}</h3>
            <p className="card-data--price">
              <FormatePrice price={price} />
            </p>
          </div>
        </div>
      </div>
    </NavLink>
  );
};

export default Product;
