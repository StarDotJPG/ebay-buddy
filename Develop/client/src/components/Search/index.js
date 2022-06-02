import React from "react";
import "./style.css";
import TextField from "@mui/material/TextField";


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
          console.log(event);
        }}
      >
        <div className="text-center container">
          <TextField
            className=""
            id="itemName"
            label="Item Name?"
            variant="outlined"
          />
        </div>

        <div className="text-center">
          <button className="btn btn-secondary">Search</button>
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
