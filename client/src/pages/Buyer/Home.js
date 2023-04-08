import React from 'react' 
import Announcement from '../../components/Buyer/Announcement'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Buyer/Footer';
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import Cookies from "universal-cookie";
import jwtDecode from "jwt-decode";

const cookies =new Cookies();

const Home = () => {

    const [productForBuy,setProductForBuy] = useState([])

    const token = cookies.get("TOKEN");
    let user1;
    if(token)
    { user1=jwtDecode(token);}


    const getAllProducts1 = function()
    {
        if(token)
        {
        const configuration = {
            method: "post",
            url: "http://localhost:5000/sell/products/2",
          //   headers: { // Authorization: `Bearer ${token}`, //   },
          data:{
          sellerEmail:user1.userEmail
          }
          };
      
         axios(configuration)
        .then((result) => {
         setProductForBuy(result.data.products);
         })
        .catch((error) => {
          error = new Error();
        });
      }
    }

    useEffect(() => {
      // console.log(productForBuy);
     getAllProducts1();
  },[productForBuy]);



  return (
    <>
    <Navbar/>
    <Announcement/>
    <div class="min-h-screen">
        <input type="number" placeholder='Pincode' />
    {productForBuy.map((productDetails) => (
<div class="w-auto  max-w-xs bg-gray-50 hover:shadow-2xl inline-block m-2.5 mt-8">
    <a href="/">
        <img class="p-3 rounded-t-lg object-cover  h-48 w-96" src={productDetails.imgurl} alt="" />
        <span class="text-green-900 hover:text-yellow-500">{productDetails.title}</span>
        <br></br>
        <span>{productDetails.price}</span>
      
    </a>
    {/* <div class="px-5">
      
        <div class="py-2 flex justify-between">
        <a href={`/sell/products/${productDetails._id}`} class="text-white  font-medium rounded-sm text-sm px-5 py-2.5 text-center dark:bg-gray-600 dark:hover:bg-red-700">EDIT</a>
        <button  value={productDetails._id} class="text-white   font-medium rounded-xm text-sm  px-5 py-2.5 text-center dark:bg-gray-600 dark:hover:bg-red-700"
         onClick={handleDelete}
         
        > DELETE </button>
        </div>
    </div> */}
</div>
))}

 </div>
 <Footer/>

    </>
  )
}

export default Home