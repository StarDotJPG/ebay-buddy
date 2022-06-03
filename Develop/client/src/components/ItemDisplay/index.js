import * as React from 'react';
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