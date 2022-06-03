import React, { useState, useEffect } from "react";
import "./style.css";
import TextField from "@mui/material/TextField";

import { useItemContext } from '../../utils/GlobalState';
import { UPDATE_ITEMS } from '../../utils/actions';
import { UPDATE_CURRENT_KEYWORD } from '../../utils/actions'
import { idbPromise } from '../../utils/helpers';

function Search() {
    const [state, dispatch] = useItemContext();
    const { keyword } = state;

  const enterKeyword = (newKeyword) => {
    if (!keyword) {
        dispatch({
            type: UPDATE_CURRENT_KEYWORD,
            keyword: newKeyword
        });
        idbPromise('keyword', 'put', newKeyword)
        } else {
          idbPromise('keyword', 'get').then((keyword) => {
            dispatch({
              type: UPDATE_CURRENT_KEYWORD,
              keyword: keyword,
            });
      });
    }
  }


  const handleItemSearch = (event) => {
    event.preventDefault();

    const itemName = document.getElementById("itemName").value;
    enterKeyword(itemName)
    // state.items.map((item) => {item.name.includes(itemName)})
    window.location.replace('/item-display');
  }

  return (
    <main className="background">
      <form onSubmit={(event) => {handleItemSearch(event)}}>
        <div className="text-center container">
          <TextField
            className=""
            id="itemName"
            label="Item Name?"
            variant="outlined"
          />
        </div>

        <div className="submitBtn">
                    <input type="submit" />
                </div>
        /* <div className="drop-down text-center container">
          <select className="" name="sections" id="sections">
            <option className="" value="A1"></option>
          </select>
        </div> */
      </form>
    </main>
  );
}

export default Search;