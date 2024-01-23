import React from 'react';
import ReactDOM from 'react-dom/client';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";


import { Home, Product, Products, AboutPage, ContactPage, Cart, Login, Register, Checkout, PageNotFound } from "./pages"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Products />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="*" element={<PageNotFound />} />
        <Route path="/product/*" element={<PageNotFound />} />
      </Routes>
    </Provider>
  </BrowserRouter>
);

const firebaseConfig = {
  apiKey: "AIzaSyAKtLEXtrQHEcbeftMDpACfZtLnTJMo1kI",
  authDomain: "e-deal-768dd.firebaseapp.com",
  projectId: "e-deal-768dd",
  storageBucket: "e-deal-768dd.appspot.com",
  messagingSenderId: "138136483929",
  appId: "1:138136483929:web:f6fa297fa9ef8cb62f1948",
  measurementId: "G-622J3LYVMC"
}

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
