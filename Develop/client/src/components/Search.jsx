import React from "react";
import "../assets/styles/Search.css";


function itemSearch(event) {
    event.preventDefault();
    // let item = document.getElementById("item").value
}




function Search() {
  return (
    <main class="background">
        <form onSubmit={(event) => {itemSearch(event)}}>
        <div class="text-center container">
            <label>Item Name:</label>
            <input id="itemName" type="text" name="itemName"></input>
            <button class ="">GO TIME BABY!!!</button>
        </div>

        </form>
    </main>
  );
}

export default Search;
