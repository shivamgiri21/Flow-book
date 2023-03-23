import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Register from "./components/Register"
import Login from "./components/Login"
import Home from "./components/Home";
import Private from "./components/Private";
import ProtectedRoutes from "./ProtectedRoutes";

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
            
          </Routes>
        </div>
      </BrowserRouter>
  )
}

export default App;
