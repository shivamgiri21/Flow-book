import React, { useState } from "react";
import axios from "axios";

const Register = () => {
//   const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const[register,setRegister] =useState(false);
  const[message,setMessage]= useState("");

//   const handleUsernameChange = (event) => {
//     setUsername(event.target.value);
//   };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const pick="shivam"

  const handleSubmit = (event) => {
    event.preventDefault();
   
    const configuration = {
        method: "post",
        url: "http://localhost:5000/register",
        data: {
          email,
          password
        },
      };
  
      axios(configuration)
      
      .then((result) => { 
        setRegister(true);
        console.log(result.data.message);
        setMessage(result.data.message);
    
    })
    .catch((error) => {console.log(error.response.data);})

  };

  return (
    <div>
    
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        {/* <label>
          Username:
          <input type="text" value={username} onChange={handleUsernameChange} />
        </label> */}
        {/* <br /> */}
         <label>
          Email:
          <input type="email"  name="email" value={email} onChange={handleEmailChange} />
        </label>
        <br />

        <label>
          Password:
          <input type="password"  name="password" value={password} onChange={handlePasswordChange} />
        </label>
        <br />
        {register ? (
          <p className="text-success">{message}</p>
        ) : (
        //   <p className="text-danger">You Are Not Registered</p>
        null
        )}

        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
