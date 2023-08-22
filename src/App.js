import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./style/GlobalStyle";
import Header from "./components/navbar-components/Header";
import Footer from "./components/Footer";
import About from "./pages/AboutPage";
import Products from "./pages/ProductPage";
import Contact from "./pages/ContactPage";
import SingleProduct from "./pages/SingleProductPage";
import Cart from "./pages/Cart";
import ErrorPage from "./pages/ErrorPage";
import HomePage from "./pages/HomePage";
import { cartTotalAmount } from "./reduxToolKit/slices";
import { updateInputValue, sortingProducts } from "./reduxToolKit/slices";

function App() {
  const dispatch = useDispatch();
  const data = useSelector((store) => store.products);
  const { cart, products, sorting_value, filters } = data;

  useEffect(() => {
    dispatch(updateInputValue());
    dispatch(sortingProducts());
  }, [dispatch, products, sorting_value, filters]);

  useEffect(() => {
    dispatch(cartTotalAmount());
  }, [dispatch, cart]);

  const theme = {
    colors: {
      heading: "rgb(24,24,29)",
      bg: "#F6F8FA",
      text: "rgba(29,29,29,.8)",
      white: "#fff",
      black: "#212529",
      helper: "#8490ff",
      footer_bg: "#0a1435",
      btn: "rgb(98 84 243)",
      border: "rgba(98,84,243,0.5)",
      hr: "#ffffff",
      gradient:
        "linear-gradient(0deg,rgb(132 144 255) 0%, rgb(98 189 252) 100%",
      shadow:
        "rgba(0,0,0,0.02) 0px 1px 3px 0px, rgba(27,31,35,0.15) 0px 0px 0px 1px;",
      shadowSupport: "rgba(0,0,0,0.16) 0px 1px 4px",
    },
    media: {
      mobile: "785px",
      tab: "998px",
    },
  };
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <GlobalStyle />
        <Header />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/Singleproduct/:id" element={<SingleProduct />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
        <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default App;
