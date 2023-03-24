import { useState } from "react";
import "./newProduct.css";
import axios from "axios";


export default function NewProduct() {

const initial =
    {
        title:"",
        description:"",
        price:"",
        pincode:"",
      
    }   

const [image, setImage ] = useState("");
const [ imgurl, setUrl ] = useState("");
const [data,setData] =useState(initial);

 //image part  
 const uploadImage = (e) => {
 e.preventDefault();
 const data1 = new FormData()
 data1.append("file", image)
 data1.append("upload_preset", "nuokfvkw")
 data1.append("cloud_name","dzgvbxjqd")
 fetch("  https://api.cloudinary.com/v1_1/dzgvbxjqd/image/upload",{
 method:"post",
 body: data1
 })
 .then(resp => resp.json())
 .then(data1 => {
 setUrl(data1.url)
 })
 .catch(err => console.log(err))
 }

    
   const handleChange= async(e)=>{
    setData({...data, [e.target.name]: e.target.value});
   }


  const handleClick=(e)=>{

    e.preventDefault();

  console.log(imgurl);

    const configuration = {
        method: "post",
        url: "http://localhost:5000/sell/products",
        data: {
         title:data.title,
         description:data.description,
         price:data.price,
         pincode:data.pincode,
         imgurl:imgurl
        },
      };
  
      axios(configuration)
      
      .then((result) => { 
        // setRegister(true);
        console.log(result);
        // setMessage(result.data.message);
    
    })
    .catch((error) => {console.log(error.response.data.errors.pincode);})

  
  }


  return (
    <div className="newProduct">
      <h1 className="addProductTitle">New Product</h1>
      <form className="addProductForm">
        
        <div className="addProductItem">
          <label>Title</label>
          <input
            name="title"
            type="text"
            placeholder="Apple Airpods"
            value={data.title}
            required="true"
            onChange={handleChange}
            // onChange={(e) => settitle(e.target.value)}
          />
        </div>
        <div className="addProductItem">
          <label>Description</label>
          <textarea
            name="description"
            type="text"
            required="true"
            value={data.description}
            rows="5"
            cols="49"
            placeholder="Description..."
            onChange={handleChange}
            // onChange={(e) => setdescription(e.target.value)}
          />
        </div>
        <div className="addProductItem">
          <label>Price</label>
          <input
            name="price"
            type="number"
            value={data.price}
            required="true"
            placeholder="100"
            onChange={handleChange}
            // onChange={(e) => setprice(e.target.value)}
          />
        </div>
        <div className="addProductItem">
          <label>Pin Code</label>
            <input type="text" 
            name="pincode"
            value={data.pincode}
            placeholder="273001"
            required="true"
            onChange={handleChange} 
            // onChange={(e) => setpincode(e.target.value)}
            />

        </div>
        <div className="addProductItem">
          <label>Stock</label>
          {/* <select name="inStock" onChange={handleChange}> */}
           <select name="inStock" >
            <option value="true">Yes</option>
            <option value="false">No</option>
          </select>
        </div>
        <div className="addProductItem">
          <label>Image</label>
          <input
         
          name="imgurl"
          value={data.imgurl}
            type="file"
            id="file"
             onChange= {(e)=> setImage(e.target.files[0])}
             />
        <button onClick={uploadImage} >Upload image</button>
        </div>

       <button onClick={handleClick} className="addProductButton">
          Create
        </button>
      </form>
      <img src={imgurl}/>
    </div>
  );
}