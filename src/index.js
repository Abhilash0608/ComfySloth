import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import { ProductsProvider } from "./context/products_context";
import { FilterProvider } from "./context/filter_context";
import { CartProvider } from "./context/cart_context";
import { UserProvider } from "./context/user_context";
import { Auth0Provider } from "@auth0/auth0-react";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Auth0Provider
    domain="dev-pe6bpo1rduolvs02.jp.auth0.com"
    clientId="HFzsnBwN4Q1Q0Ug9hJss3AyUstKfXo7X"
    authorizationParams={{
      redirect_uri: window.location.origin,
    }}
  >
    <ProductsProvider>
    <UserProvider>
      <FilterProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </FilterProvider>
      </UserProvider>
    </ProductsProvider>
  </Auth0Provider>
);
