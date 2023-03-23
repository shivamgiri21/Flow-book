import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Register from "./components/Register"
import Login from "./components/Login"

function App() {
  return (
  <BrowserRouter>
        <div>
          <Routes>
            <Route path="/register" element={<Register />}></Route>
            <Route path="/login" element={<Login/>}></Route>
          </Routes>
        </div>
      </BrowserRouter>
  )
}

export default App;
