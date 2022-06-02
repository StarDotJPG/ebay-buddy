import * as React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";

function ItemDetails() {
  return (
    <div className="container display-container">
      <h1 className="text-center "> Item Information </h1>
      <div className="text-left border">
        <ul>
        
          <li id="name" className="border-top">Name: </li>
          <li id="description">Description: </li>
          <li id="createdAt">Created At: </li>
          <li id="size">Size: </li>
          <li id="weight">Weight: </li>
          <li id="section">Section: </li>

        </ul>     
      </div>
    </div>
  )
}

export default ItemDetails;
