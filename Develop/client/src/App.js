import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import "./App.css";
import Search from "./components/Search/index.js";
import Appbar from "./components/Appbar/index.js";
import ItemDisplay from "./components/ItemDisplay/index.js";
import ItemDetails from "./components/ItemDetails/index.js";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
       <div class="background">
        <Appbar />
        <main>
          <Search />
          <ItemDisplay />
          <ItemDetails/>
        </main>
      </div>
 
  );
}

export default App;
