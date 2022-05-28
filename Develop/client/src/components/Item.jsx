import { React, useState } from "react";
import TextField from "@mui/material/TextField";
import "../assets/styles/Item.css"

function Item() {
  return (
    <div className="main">
      <h1>Items</h1>
      <div className="search">
        <TextField
          id="outlined-basic"
          variant="outlined"
          fullWidth
          label="Search"
        />
      </div>

      {/* Put the file.js that has the data imported to it from the JSON. It shoud bring up the inventory.
      < />
      */}

    </div>
  );
}
        
export default Item;
