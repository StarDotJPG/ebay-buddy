import React from 'react';
import './index.css'

export default function Login() {
  return (
    <>
     <header class="loginHeader">
    <h1>
    <span style={{color: red}}>e</span>
    <span style={{color: blue}}>b</span>
    <span style={{color: yellow}}>a</span>
    <span style={{color: "#86B817"}}>y</span>
    <span style={{color: Blue}}>Buddy</span>
    </h1>
</header>
    <div className='login'>
          <h2>Login</h2>
          <label>Username:</label>
          <input type="text" name="Username" required />
                <label>Password:</label>
                <input type="password" name="password" required />
    </div>
        <div className="submitBtn">
            <input type="submit" />
        </div>
    <h2>Sign Up</h2>
    <div className ='signup'>
        <label>Username:</label>
        <input type="text" name="Username" required />
                <label>Password:</label>
                <input type="password" name="password" required />
    </div>
    <div className="submitBtn">
        <input type="submit" />
    </div>
    </>
  )
}
