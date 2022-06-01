import * as React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";

function ItemDetails() {
  return (
  <>
    <div className="container display-container">
            <h1 class="text-center "> Item Information </h1>
        <div class="text-left border">
            <ul class="">
            
            <li id="name" class="border-top">Name: </li>
            <li id="description">Description: </li>
            <li id="createdAt">Created At: </li>
            <li id="size">Size: </li>
            <li id="weight">Weight: </li>
            <li id="section">Section: </li>

            </ul>
         


       
</div>
    </div>

  </>
  )
}

export default ItemDetails;
