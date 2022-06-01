import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Search from "./components/Search.jsx";
import Item from "./components/Item.jsx";
import Appbar from "./components/Appbar/Appbar";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div>
        <Appbar />
        <Search />
    </div>
  );
}

export default App;
