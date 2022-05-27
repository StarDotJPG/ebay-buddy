import React from "react";
import "../assets/styles/Search.css";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';




function Search() {
  function itemSearch(event) {
    event.preventDefault();
    let item = document.getElementById("itemName").value;
    console.log(item);
  }
  return (
    <main class="background">
      <form
        onSubmit={(event) => {
          itemSearch(event);
        }}
      >
        <div class="text-center container">
          <label>Item Name: </label>
          <TextField class="" id="itemName" label="itemName" variant="outlined" />
         
          <Button variant="contained">GO TIME BABY!!!</Button>
         
        </div>
        <div class="drop-down text-center container">
          <select class="" name="sections" id="sections">
            <option class="" value="A1"></option>
          </select>
        </div>
      </form>
    
    </main>
  );
}

export default Search;
