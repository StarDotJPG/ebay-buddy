import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./style.css"

function ItemDisplay() {
  return (
<>
    <div className="container display-container">
        <div className="text-center border">
            <ul className="display-box"></ul>



    </div>
        </div>
        <div className="row button-container">
            
    <button className="col btn1 btn btn-primary">View / Edit</button>
    <button className="col btn1 btn btn-danger ">Delete</button>
    <button className="col btn1 btn btn-success">Add</button>
    </div>
    </>
  )
}

export default ItemDisplay;