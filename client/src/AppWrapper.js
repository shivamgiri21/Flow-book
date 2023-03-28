import React from 'react'
import { useEffect } from "react";
import axios from "axios";
import { useContext } from "react";
import { ProductDataContext } from './Context/ProductData';


const AppWrapper = (props) => {

    const [productDataState,setProductDataState] = useContext(ProductDataContext)

    const getAllProducts = function()
    {
        const configuration = {
            method: "get",
            url: "http://localhost:5000/sell/products",
          //   headers: { // Authorization: `Bearer ${token}`, //   },
          };
      
         axios(configuration)
        .then((result) => {
          // console.log(result.data.products);
          setProductDataState(result.data.products);
         })
        .catch((error) => {
          error = new Error();
        });
    }



    useEffect(() => {
    getAllProducts()
   },[productDataState]);
  
   


  return (
    
    <>
    <div>
        {props.children}
         {/* <button id="updateuser" className="hidden" onClick={() => getAllProducts()} /> */}
         {/* <button id="updateroom" className="hidden" onClick={() => UpdateRoom()} />  */}
    </div>
</>
  )
}

export default AppWrapper