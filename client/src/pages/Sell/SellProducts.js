import React from 'react'
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sell/Sidebar";
import "./sellProduct.css"
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';


const SellProducts =  () => {

    const[count,setclicked]=useState(0);
    const[data,setData] =useState([])
    const[url1,seturl1]=useState("");


   useEffect(() => {
        // set configurations for the API call here
        const configuration = {
          method: "get",
          url: "http://localhost:5000/sell/products",
        //   headers: {
        //     Authorization: `Bearer ${token}`,
        //   },
        };


       axios(configuration)
      .then((result) => {
        setData(result.data.products);
        // console.log(result.data.products);
      })
      .catch((error) => {
        error = new Error();
      });
     }, []);
     
   console.log(data);


  
   const handleDelete =(e)=>
   {
       setclicked(count+1);
      const id= e.target.value;
      seturl1("http://localhost:5000/sell/products/"+id)
      window.location.reload();


   }
   
   

   useEffect(() => {
    
  
    
     const configuration = {
      method: "delete",
      url: url1,
    //   headers: {
    //     Authorization: `Bearer ${token}`,
    //   },
    };

    
   axios(configuration)
   .then((result) => {
    console.log(result);
   })
   .catch((error) => {
     error = new Error();
   });
  
   
 
}, []);









  return (
    <>
    <Navbar/>
    <br/>
    <div class=" flex space-between"> 
    <Sidebar/> 

    <div className="product1">
    <div className="productTitleContainer">
      <h1 className="productTitle"> <b>Product</b></h1>
      <Link to="/sell/addproduct">
        <button className="productAddButton">Create New</button>
      </Link>
    </div>

    {/* <div class="container col-md-4"> 
        <div class="products">
          <div class="product1">
            <img src="https://images.unsplash.com/photo-1503524921528-8f5fa912ea75?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" width="250px" height="250px" alt=""/>
            <div class="content">
              <h3><a href="#">Product Name</a></h3>
              <span><a href="#">500$</a></span>
            </div>
            <div class="link">
             
              <a  href="/product/1/edit"><i class="fas fa-pen"></i></a>
              <a href="#"></a>
            </div>
            </div>
        </div>
      </div>

 */}


{data.map((user) => (
<div class="w-auto  max-w-xs bg-gray-50 hover:shadow-lg inline-block m-2.5 ">
    <a href="/">
        <img class="p-3 rounded-t-lg" src={user.imgurl} alt="" />
        <span class="text-green-900 hover:text-yellow-500">{user.title}</span>
        <br></br>
        <span>{user.price}</span>
      
    </a>
    <div class="px-5">
      
        <div class="py-2 flex justify-between">
        <a href="/" class="text-white  font-medium rounded-sm text-sm px-5 py-2.5 text-center dark:bg-gray-600 dark:hover:bg-red-700">EDIT</a>
        <button  value={user._id} class="text-white   font-medium rounded-xm text-sm  px-5 py-2.5 text-center dark:bg-gray-600 dark:hover:bg-red-700"
         onClick={handleDelete}
         
        > DELETE </button>
        </div>
    </div>
</div>
))}


    </div>
    </div>
    
    </>
  )
}

export default SellProducts
