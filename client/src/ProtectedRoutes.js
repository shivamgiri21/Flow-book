import React from 'react'
import { Outlet,Navigate } from 'react-router-dom';
import Cookies from "universal-cookie";
const cookies = new Cookies();

const ProtectedRoutes = () => {
  
    let isAuth= false;
    const token = cookies.get("TOKEN");

    if(token)
    {
        isAuth=true;
    }
      return (
        isAuth ? <Outlet/> :window.location.href = "/login"
  
       )
}

export default ProtectedRoutes