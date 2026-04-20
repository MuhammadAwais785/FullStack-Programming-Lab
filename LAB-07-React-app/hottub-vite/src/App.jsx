import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import HotttubMainPage from "./pages/Hotttub_main";
import CategoryPage from "./pages/Category";
import AboutUsPage from "./pages/AboutUs";
import ContactUsPage from "./pages/ContactUs";
import EditBillingAddressPage from "./pages/EditBillingAddress";
import EditShippingAddressPage from "./pages/EditShipping";
import ForgetPasswordPage from "./pages/ForgetPassword";
import LoginPage from "./pages/LoginPage";
import MyAccountPage from "./pages/MyAccount";
import ProductDesPage from "./pages/ProductDes";
import RegisterPage from "./pages/Register";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/hottub-main" replace />} />
      <Route path="/hottub-main" element={<HotttubMainPage />} />
      <Route path="/category" element={<CategoryPage />} />
      <Route path="/about-us" element={<AboutUsPage />} />
      <Route path="/contact-us" element={<ContactUsPage />} />
      <Route path="/edit-billing-address" element={<EditBillingAddressPage />} />
      <Route path="/edit-shipping-address" element={<EditShippingAddressPage />} />
      <Route path="/forget-password" element={<ForgetPasswordPage />} />
      <Route path="/login-or-create-account" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/my-account" element={<MyAccountPage />} />
      <Route path="/product-des" element={<ProductDesPage />} />
    </Routes>
  );
}

export default App;