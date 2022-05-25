import React from "react";
import "../assets/styles/Header.css";

function Header() {
  return (
    <header class="container">
      <div class="row">
          
        <span class="col text-left">ebay Buddy</span>
        <div class="col"></div>
        
       
        <button id="sign-in-button" class="btn btn-info btn-sm col">
          Login / Sign Up
        </button>
      </div>
    </header>
  );
}

export default Header;
