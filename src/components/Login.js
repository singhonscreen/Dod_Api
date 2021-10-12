import React, { useState } from 'react';
import history from './history';



const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  

  

  const login = ()=>{
    if(email ==="" && password === "" ){
        alert("Please fill the values")
    }
    if(email === "avadhesh65@yahoo.com" && password === "Avadhesh12345"){
      history.push(`/loggedin`) 
    }else{
      alert("Please fill the correct values")
    }
   }

  return (
    <>
      <div className="login_container">
        <div className="header">
          <h1>Dog Api</h1>
          <p>Here we can find random images of dogs</p>
        </div>
        <div className="form_container">
          <form className="form_field" onSubmit ={login} autocomplete="off">
            <div className="input_field">
              <input type="email" name="email" autocomplete="off" placeholder="Email"  value={email}
              onChange={e => setEmail(e.target.value)} />
            </div>
            <div className="input_field"  >
              <input type="password" name="password" autocomplete="off" placeholder="Password"  value={password}
              onChange={e => setPassword(e.target.value)} />
            </div>
            <div className="input_field">
              <input type="submit" value="Log In" className="btn" />
            </div>
          </form>
          <div className="forgotten">
            <a href="#">Forgotten password?</a>
          </div>
          <hr />
          <button className="btn2"> Create New Account </button>

        </div>
      </div>
    </>
  )
}

export default Login
