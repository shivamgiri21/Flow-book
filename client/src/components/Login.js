import React, { useState } from "react";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [login, setLogin] = useState(false);
  const[message,setMessage]= useState("");


  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();


    const configuration = {
        method: "post",
        url: "http://localhost:5000/login",
        data: {
          email,
          password,
        },
      };

      axios(configuration)

      .then((result) => {
        setLogin(true);
        console.log(result);
        setMessage(result.data.message);

      })
      .catch((error) => {
        error = new Error();
      });


   
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input type="text"  name="email" value={email} onChange={handleEmailChange} />
        </label>
        <br />
        <label>
          Password:
          <input type="password"  name="password" value={password} onChange={handlePasswordChange} />
        </label>
        <br />

        {login ? (
          <p className="text-success">{message}</p>
        ) : (
        //   <p className="text-danger">You Are Not Logged in</p>
        null
        )}
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
