import React from "react";
import styled from "styled-components";
import { BsFillGridFill, BsList } from "react-icons/bs";
import { useSelector, useDispatch } from "react-redux";
import { setGridView, setListView, sorting } from "../../reduxToolKit/slices";

const Sort = () => {
  const dispatch = useDispatch();

  const data = useSelector((store) => store.products);
  const { filter_products, grid_view } = data;

  const totalProduct = filter_products.length;
  return (
    <Wrapper>
      <div className="sorting-list--grid">
        <button
          className={grid_view ? "active sort-btn" : "sort-btn"}
          onClick={() => dispatch(setListView())}
        >
          <BsFillGridFill className="icon" />
        </button>
        <button
          className={grid_view ? "sort-btn" : "active sort-btn"}
          onClick={() => dispatch(setGridView())}
        >
          <BsList className="icon" />
        </button>
      </div>
      <div className="products-data">
        {`${totalProduct} Products Available`}
      </div>
      <div className="sort-selection">
        <form action="#">
          <label htmlFor="sort"></label>
          <select
            name="sort"
            id="sort"
            className="sort-selection--style"
            onClick={() => dispatch(sorting())}
          >
            <option value="lowest"> Price(lowest)</option>
            <option value="highest"> Price(highest)</option>
            <option value="a-z"> Price(a-z)</option>
            <option value="z-a"> Price(z-a)</option>
          </select>
        </form>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 5rem 1rem;
  .products-data {
    font-size: 1.8rem;
  }
  .sorting-list--grid {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1.2rem;
    .sort-btn {
      border: none;
      padding: 0.8rem;
      border-radius: 0.5rem;
      cursore: pointer;
      line-height: 0;
      .icon {
        font-size: 1.6rem;
        font-weight: 600;
      }
    }
    .active {
      background-color: #000;
      color: #fff;
    }
  }
  .sort-selection--style {
    padding: 0.5rem;
    outline: none;
    border: 0.1rem solid rgb(98 84 243);
    border-radius: 0.5rem;
    font-size: 1.6rem;
  }

  @media (max-width: 400px) {
    .products-data {
      display: none;
    }
  }
`;

export default Sort;
