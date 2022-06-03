import React, { useEffect } from "react";
import "./style.css";
import TextField from "@mui/material/TextField";
import { useQuery } from '@apollo/client';
import { QUERY_ITEMS } from '../../utils/queries';
import { useItemContext } from '../../utils/GlobalState';
import { UPDATE_ITEMS } from '../../utils/actions';
import { idbPromise } from '../../utils/helpers';

function Search() {
  const [state, dispatch] = useItemContext();

  const { loading, data } = useQuery(QUERY_ITEMS);
  console.log(data)

  // useEffect(() => {
  //   if (data) {
  //     dispatch({
  //       type: UPDATE_ITEMS,
  //       items: data.items,
  //     });
  //     data.items.forEach((item) => {
  //       idbPromise('items', 'put', item);
  //     });
  //   } else if (!loading) {
  //     idbPromise('items', 'get').then((items) => {
  //       dispatch({
  //         type: UPDATE_ITEMS,
  //         items: items,
  //       });
  //     });
  //   }
  // }, [data, loading, dispatch]);

  // function filterItems(itemName) {
  //   if (!state.items) {
  //     return state.items;
  //   }

  //   return state.items.filter((item) => {
  //     if (item.name.includes(itemName)) {
  //       return item
  //     }
  //   });
  // }

  const handleItemSearch = (event) => {
    event.preventDefault();
    const itemName = document.getElementById("itemName").value;
 
    // filterItems(itemName);

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