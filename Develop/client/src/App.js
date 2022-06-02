import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import "./App.css";
import Search from "./components/Search/index.js";
import Appbar from "./components/Appbar/index.js";
import Donation from './components/Donation/index';
import ItemDisplay from "./components/ItemDisplay/index.js";
import ItemDetails from "./components/ItemDetails/index.js";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
       <div className="background">
        <Appbar />
        <main>
          <Search />
          <ItemDisplay />
          <ItemDetails/>
          <Donation />
        </main>
      </div>
 
  );
}

export default App;
