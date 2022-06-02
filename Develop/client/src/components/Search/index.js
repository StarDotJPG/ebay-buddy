import React from "react";
import "./style.css";
import TextField from "@mui/material/TextField";
import { useQuery, userParam } from '@apollo/client';
import { QUERY_ITEMS } from '../../utils/queries';

const useSearchData = () => {
  const { loading, error, data } = useQuery(QUERY_ITEMS)

  //{ data } = data[]

  if (loading) {
    console.log("Loading...")
  }

  if (error) {
    console.log(error.message)
  }

  console.log(data.stringify)

  return data

}

function Search() {
  
  const itemsArray = useSearchData()

  function itemSearch(event) {
    event.preventDefault();
    let item = document.getElementById("itemName").value;
    //Compare to array returned from GQL query
    //data.foreach if data.name = item
    //create list element with that name
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
