import React from 'react';
import './style.css'

export default function Login() {
  return (
    <>
    <header className="loginHeader">
        <h1>
        <span style={{color: "#E53238"}}>e</span>
        <span style={{color: "#0064D3"}}>b</span>
        <span style={{color: "#F5A5"}}>a</span>
        <span style={{color: "#86B817"}}>y</span>
        <span style={{color: "#0064D3"}}>Buddy</span>
        </h1>
    </header>
        <div className="mainContainer">
            <div className='login'>
                <h2>Login</h2>
                    <label>Email:</label>
                        <input type="text" name="Email" required />
                <br />
                <br />
                    <label>Password:</label>
                        <input type="password" name="password" required />
                            <div className="submitBtn">
                                <input type="submit" />
                            </div>
            </div>
        <div className='signup'>
            <h2>Sign Up</h2>
                <label>Email:</label>
                    <input type="text" name="Email" required />
                <br />
                <br />
                    <label>Password:</label>
                        <input type="password" name="password" required />
                            <div className="submitBtn">
                                <input type="submit" />
                            </div>
            </div>
        </div>
    </>
  )
}
