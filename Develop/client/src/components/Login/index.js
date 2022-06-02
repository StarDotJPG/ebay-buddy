import React from 'react';
import './style.css'

export default function Login() {

    function loginButtonHandler(event) {

        event.preventDefault()

        const userEmail = document.querySelector('#user-email').value.trim()
        const password = document.querySelector('#user-pass').value.trim()

        console.log("Login button clicked!")

        if (userEmail && password) {
            // graphQL login stuff
        }

        else {
            // error handling for no entry
        }

    }

    function signupButtonHandler(event) {

        event.preventDefault()

        const userEmail = document.querySelector('#new-user-email').value.trim()
        const password = document.querySelector('#new-user-pass').value.trim()

        console.log("Signup button clicked!")

        if (userEmail && password) {
            // graphQL login stuff
        }

        else {
            // error handling for no entry
        }

    }

    return (
        <>
            <header className="loginHeader">
                <h1>
                    <span style={{ color: "#e53238" }}>e</span>
                    <span style={{ color: "#0064D3" }}>b</span>
                    <span style={{ color: "#f5af02" }}>a</span>
                    <span style={{ color: "#86B817" }}>y</span>
                    <span style={{ color: "#0064D3" }}>Buddy</span>
                </h1>
            </header>

            <form onSubmit={(event) => { loginButtonHandler(event) }}>
                <div className='login'>
                    <h2>Login</h2>
                    <label>Email:</label>
                    <input type="text" name="email" id="user-email" required />
                    <label>Password:</label>
                    <input type="password" name="password" id="user-pass" required />
                </div>
                <div className="submitBtn">
                    <input type="submit" />
                </div>
            </form>

            <form onSubmit={(event) => { signupButtonHandler(event) }}>
                <div className='signup'>
                    <h2>Sign Up</h2>
                    <label>Username:</label>
                    <input type="text" name="Username" id="new-user-email" required />
                    <label>Password:</label>
                    <input type="password" name="password" id="new-user-pass" required />
                </div>
                <div className="submitBtn">
                    <input type="submit" />
                </div>
            </form>
        </>
    )
}