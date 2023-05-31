import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { AppProvider } from "./context/productcontex";
import { FilterProvider } from "./context/Filtercontex";
import { CartProvider } from "./context/Cart_Context";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <AppProvider>
        <FilterProvider>
            <CartProvider>
                <App />
            </CartProvider>
        </FilterProvider>
    </AppProvider>
);

