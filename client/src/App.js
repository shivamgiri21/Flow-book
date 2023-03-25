import React from "react";
import "./App.css"
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Register from "./pages/Register"
import Login from "./pages/Login"
import Home from "./pages/Home"
import Private from "./components/Private";
import ProtectedRoutes from "./ProtectedRoutes";
import SellHome from "./pages/Sell/SellHome";
import AddProduct from "./pages/Sell/AddProduct";
import SellProducts from "./pages/Sell/SellProducts"


function App() {
  return (
  <BrowserRouter>
        <div>
          <Routes>
             <Route path="/" element={<Home/>}></Route>
             <Route path="/private" element={<ProtectedRoutes />}>
             <Route path="/private" element={<Private />}></Route>
             </Route>
             <Route path="/register" element={<Register />}></Route>
            <Route path="/login" element={<Login/>}></Route>
            <Route path="/sell" element={<SellHome/>}></Route>
            <Route path="/sell/addproduct" element={<AddProduct/>}></Route>
            <Route path="/sell/products" element={<SellProducts/>}></Route>


            
          </Routes>
        </div>
      </BrowserRouter>
  )
}

export default App;
