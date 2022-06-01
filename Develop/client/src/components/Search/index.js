import React from "react";
import "./style.css";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


function Search() {
  function itemSearch(event) {
    event.preventDefault();
    let item = document.getElementById("itemName").value;
    console.log(item);
  }
  return (
    <main className="background">
      <form
        onSubmit={(event) => {
          itemSearch(event);
        }}
      >
        <div className="text-center container">
          <label>Item Name: </label>
          <TextField className="" id="itemName" label="itemName" variant="outlined" />
         
          <Button variant="contained">SEARCH</Button>
         
        </div>
        <div className="drop-down text-center container">
          <select className="" name="sections" id="sections">
            <option className="" value="A1"></option>
          </select>
        </div>
      </form>
    
    </main>
  );
}

export default Search;
