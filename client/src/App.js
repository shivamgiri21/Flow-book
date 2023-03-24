import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Register from "./pages/Register"
import Login from "./pages/Login"
import Home from "./pages/Home"
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
