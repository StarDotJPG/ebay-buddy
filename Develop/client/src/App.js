import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from "./components/Header";
import Search from "./components/Search.jsx";
import Item from "./components/Item.jsx";
import Appbar from "./components/Appbar/Appbar";
import "bootstrap/dist/css/bootstrap.min.css";
import Donation from './components/Donation/index.js';

function App() {
  return (
    <div>
      <Appbar />
      <Search />
    </div>
  );
}

export default App;
