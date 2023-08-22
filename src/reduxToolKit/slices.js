import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchData = createAsyncThunk("fetchData", async () => {
  const responce = await axios.get("https://api.pujakaitem.com/api/products");
  return responce?.data;
});

export const getSingleProduct = createAsyncThunk(
  "singleProduct",
  async (url) => {
    const response = await axios.get(url);
    return response?.data;
  }
);

const productSlice = createSlice({
  name: "allProducts",
  initialState: {
    isLoading: false,
    isError: false,
    products: [],
    featureProducts: [],
    sLoading: false,
    singleProduct: {},
    filter_products: [],
    All_products: [],
    grid_view: true,
    sorting_value: "lowest",
    cart: [],
    total_item: "",
    total_Amount: "",
    shipping_fee: 5000,
    filters: {
      text: "",
      category: "All",
      company: "All",
      colors: "All",
      maxPrice: 0,
      price: 0,
      minPrice: 0,
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchData.pending, (state, action) => {
      return {
        ...state,
        isLoading: true,
      };
    });
    builder.addCase(fetchData.fulfilled, (state, action) => {
      const featureData = action.payload.filter((curElem) => {
        return curElem.featured === true;
      });
      const PriceArr = action.payload.map((curElem) => {
        return curElem.price;
      });
      const maxPrice = Math.max(...PriceArr);

      return {
        ...state,
        isLoading: false,
        featureProducts: featureData,
        products: action.payload,
        filter_products: [...action.payload],
        All_products: [...action.payload],
        filters: { ...state.filters, maxPrice: maxPrice, Price: maxPrice },
      };
    });
    builder.addCase(getSingleProduct.pending, (state, action) => {
      return {
        ...state,
        sLoading: true,
      };
    });
    builder.addCase(getSingleProduct.fulfilled, (state, action) => {
      return {
        ...state,
        sLoading: false,
        singleProduct: action.payload,
      };
    });
    builder.addCase(fetchData.rejected, (state, action) => {
      return {
        ...state,
        sLoading: false,
        isError: true,
      };
    });
  },
  reducers: {
    clearAllFilter(state, action) {
      return {
        ...state,
        filters: {
          ...state.filters,
          text: "",
          category: "All",
          company: "All",
          colors: "All",
          maxPrice: 0,
          price: 0,
          minPrice: 0,
        },
      };
    },
    updateFilterValues(state, action) {
      const { name, value } = action.payload;
      return {
        ...state,
        filters: {
          ...state.filters,
          [name]: value,
        },
      };
    },
    setListView(state, action) {
      return {
        ...state,
        grid_view: true,
      };
    },
    setGridView(state, action) {
      return {
        ...state,
        grid_view: false,
      };
    },
    sorting(state, action) {
      let userSortVlaue = document.getElementById("sort");
      let sort_value = userSortVlaue.options[userSortVlaue.selectedIndex].value;
      return {
        ...state,
        sorting_value: sort_value,
      };
    },
    addToCart(state, action) {
      let { id, Amount, color, product } = action.payload;
      let commonId = state?.cart?.filter((curElem) => {
        return curElem.id === id + color;
      });
      if (commonId.length === 0) {
        let cartProduct = {
          id: id + color,
          productName: product?.name,
          color,
          Amount,
          image: product?.image[0].url,
          price: product?.price,
          max: product?.stock,
        };
        return {
          ...state,
          cart: [...state.cart, cartProduct],
        };
      } else {
        return {
          ...state,
          cart: state?.cart?.map((curElem) => {
            if (curElem.id === id + color) {
              let newAmount = curElem.Amount + Amount;
              if (newAmount >= curElem.max) {
                alert(`Only ${curElem.max} Items Are Available`);
                newAmount = curElem.max;
              }
              return {
                ...curElem,
                Amount: newAmount,
              };
            } else {
              return curElem;
            }
          }),
        };
      }
    },
    increment(state, action) {
      return {
        ...state,
        cart: state?.cart?.map((item) => {
          if (item.id === action.payload) {
            let newAmount = item.Amount + 1;
            if (newAmount > item.max) {
              newAmount = item.max;
              alert(`Only ${item.max} Item Are Present.`);
            }
            return {
              ...item,
              Amount: newAmount,
            };
          } else {
            return item;
          }
        }),
      };
    },
    decrement(state, action) {
      return {
        ...state,
        cart: state?.cart?.map((item) => {
          if (item.id === action.payload) {
            let newAmount = item.Amount - 1;
            if (newAmount < 1) {
              newAmount = 1;
              alert("There Must Be At Least One Item.");
            }
            return {
              ...item,
              Amount: newAmount,
            };
          } else {
            return item;
          }
        }),
      };
    },
    removeItem(state, action) {
      let updatedCart = state?.cart?.filter((curElm) => {
        return curElm.id !== action.payload;
      });
      return {
        ...state,
        cart: updatedCart,
      };
    },
    clearCart(state, action) {
      return {
        ...state,
        cart: [],
      };
    },
    cartTotalAmount(state, action) {
      return {
        ...state,
        total_item: state?.cart?.reduce((initialVal, curElem) => {
          let { Amount } = curElem;
          initialVal = initialVal + Amount;
          return initialVal;
        }, 0),
        total_Amount: state?.cart?.reduce((initialVal, curElm) => {
          let combineVal = curElm.Amount * curElm.price;
          initialVal = initialVal + combineVal;
          return initialVal;
        }, 0),
      };
    },
    updateInputValue(state, action) {
      let { All_products } = state;
      let newUpdateValue = [...All_products];
      const { text, category, company, colors, price } = state.filters;

      if (text) {
        newUpdateValue = newUpdateValue?.filter((curElem) => {
          return curElem.name.toLowerCase().includes(text);
        });
      }
      if (category !== "All") {
        newUpdateValue = newUpdateValue?.filter((curElem) => {
          return curElem.category === category;
        });
      }
      if (company !== "All") {
        newUpdateValue = newUpdateValue?.filter((curElem) => {
          return curElem.company === company;
        });
      }
      if (colors !== "All") {
        newUpdateValue = newUpdateValue?.filter((curElem) => {
          return curElem.colors.includes(colors);
        });
      }
      if (price) {
        newUpdateValue = newUpdateValue.filter((curElem) => {
          return curElem.price <= price;
        });
      }

      return {
        ...state,
        filter_products: newUpdateValue,
      };
    },
    sortingProducts(state, action) {
      let newSortData;
      // let temSortProduct = [...action.payload];
      const { filter_products } = state;
      let temSortProduct = [...filter_products];

      const sortingProducts = (a, b) => {
        if (state.sorting_value === "lowest") {
          return a.price - b.price;
        }

        if (state.sorting_value === "highest") {
          return b.price - a.price;
        }

        if (state.sorting_value === "a-z") {
          return a.name.localeCompare(b.name);
        }

        if (state.sorting_value === "z-a") {
          return b.name.localeCompare(a.name);
        }
      };
      newSortData = temSortProduct.sort(sortingProducts);
      return {
        ...state,
        filter_products: newSortData,
      };
    },
  },
});
export { productSlice };

export const {
  loadFilterproduct,
  clearAllFilter,
  updateFilterValues,
  setListView,
  setGridView,
  sorting,
  addToCart,
  increment,
  decrement,
  removeItem,
  clearCart,
  cartTotalAmount,
  updateInputValue,
  sortingProducts,
} = productSlice.actions;
