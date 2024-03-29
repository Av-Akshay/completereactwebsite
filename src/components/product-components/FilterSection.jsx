import React from "react";
import styled from "styled-components";
import { AiOutlineCheck } from "react-icons/ai";
import { useSelector, useDispatch } from "react-redux";
import { clearAllFilter, updateFilterValues } from "../../reduxToolKit/slices";

import FormatePrice from "../../helpers/FormatePrice";
import { Button } from "../../style/Button";

const FilterSection = () => {
  const dispatch = useDispatch();
  const filterData = useSelector((store) => store.products);
  const {
    filters: { text, colors, price, maxPrice, minPrice, category },
    All_products,
  } = filterData;

  const updateFilterValue = (event) => {
    let { name, value } = event.target;
    dispatch(updateFilterValues({ name, value }));
  };

  const getUniqueValues = (data, property) => {
    let newVal = data.map((curElm) => {
      return curElm[property];
    });
    if (property === "colors") {
      return (newVal = ["All", ...new Set([].concat(...newVal))]);
    } else {
      return (newVal = ["All", ...new Set(newVal)]);
    }
  };

  const categoryOnlyData = getUniqueValues(All_products, "category");
  const companyOnlyData = getUniqueValues(All_products, "company");
  const colorOnlyData = getUniqueValues(All_products, "colors");

  return (
    <Wrapper>
      <div className="filter-search">
        <form action="" onSubmit={(e) => e.preventDefault()}>
          <input
            type="text"
            name="text"
            value={text}
            onChange={updateFilterValue}
            placeholder="SEARCH"
          />
        </form>
        <div className="filter-category">
          <h3>Category</h3>
          <div className="filter-category-products">
            {categoryOnlyData.map((curElem, index) => {
              return (
                <button
                  key={index}
                  type="button"
                  name="category"
                  value={curElem}
                  className={category === curElem ? "active" : null}
                  onClick={updateFilterValue}
                >
                  {curElem}
                </button>
              );
            })}
          </div>
        </div>
        <div className="filter-company">
          <h3> company</h3>
          <form action="#">
            <select
              name="company"
              id="company"
              style={{ textTransform: "capitalize" }}
              className="filter-company--select"
              onClick={updateFilterValue}
            >
              {companyOnlyData.map((curElem, index) => {
                return (
                  <option
                    key={index}
                    name="company"
                    style={{ textTransform: "capitalize" }}
                    value={curElem}
                  >
                    {curElem}
                  </option>
                );
              })}
            </select>
          </form>
        </div>
        <div className="filter-colors">
          <h3>Colors</h3>
          <div className="filter-color--style">
            {colorOnlyData.map((curColor, index) => {
              if (curColor === "All") {
                return (
                  <button
                    key={index}
                    value={curColor}
                    name="colors"
                    type="button"
                    style={{
                      border: "none",
                      margin: "0 0.8rem",
                      textTransform: "capitalize",
                      backgroundColor: "transparent",
                    }}
                    onClick={updateFilterValue}
                  >
                    All
                  </button>
                );
              }
              return (
                <button
                  key={index}
                  value={curColor}
                  name="colors"
                  type="button"
                  style={{ backgroundColor: curColor }}
                  className={
                    colors === curColor ? "active btnStyle" : "btnStyle"
                  }
                  onClick={updateFilterValue}
                >
                  {colors === curColor ? (
                    <AiOutlineCheck className="check" />
                  ) : null}
                </button>
              );
            })}
          </div>
        </div>
        <div className="filter-price">
          <h3>Price</h3>
          <p>
            <FormatePrice price={price} />
          </p>
          <input
            type="range"
            min={minPrice}
            max={maxPrice}
            value={price}
            onChange={updateFilterValue}
            name="price"
          />
        </div>
        <div className="filter-clear">
          <Button className="btn" onClick={() => dispatch(clearAllFilter())}>
            Clear Filters
          </Button>
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  margin-top: 5rem;
  .filter-category {
    display: flex;
    flex-direction: column;
    margin: 5rem 0 0 0;
    gap: 1rem;
    h3 {
      font-weight: 600;
    }
    .filter-category-products {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      .active {
        color: ${({ theme }) => theme.colors.helper};
      }
    }
    button {
      outline: none;
      border: none;
      background-color: #fff;
      text-align: left;
      transition: all 0.2s linear;
      width: 40%;
      margiin-right: auto;
      position: relative;
      &:hover {
        color: ${({ theme }) => theme.colors.helper};
      }
    }
  }

  .filter-company {
    margin-top: 5rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    h3 {
      font-weight: 600;
    }
    .filter-company--select {
      outline: none;
      border-color: ${({ theme }) => theme.colors.helper};
      padding: 0.5rem;
    }
  }
  .filter-colors {
    margin-top: 5rem;
    h3 {
      font-weight: 600;
    }
  }
  .filter-color--style {
    display: flex;
    align-items: center;
    gap: 0.2rem;
    margin-top: 1rem;
  }
  .btnStyle {
    margin-right: 0.5rem;
    border-radius: 50%;
    border: none;
    width: 2rem;
    outline: none;
    height: 2rem;
    opacity: 0.6;
    position: relative;
    cursor: pointer;
    &:hover {
      opacity: 1;
    }
  }
  .active {
    opacity: 1;
    .check {
      color: white;
      font-weight: 900;
      position: relative;
    }
  }
  .btnstyle: first-child {
    background-color: #000;
  }
  .filter-price {
    margin-top: 5rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    h3 {
      font-weight: 600;
    }
    input {
      border: none;
      outline: none;
      background-color: transparent;
      padding: 0;
    }
  }
  .btn {
    background-color: red;
    margin-top: 1.8rem;
  }

  @media (max-width: 1250px) {
    .filter-search {
      padding: 0 1rem;
    }
  }
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .filter-search {
      display: flex;
      align_items: center;
      justify-content: space-between;
    }
    .filter-category {
      display: none;
    }
    .filter-company {
      display: none;
    }
    .filter-colors {
      display: none;
    }
    .filter-price {
      display: none;
    }
    .btn {
      margin: 0;
      padding: 1em 2rem;
    }
  }
  @media (max-width: 400px) {
    .btn {
      display: none;
    }
    .filter-search {
      form {
        width: 100%;
        input {
          width: 100%;
        }
      }
    }
  }
`;

export default FilterSection;
