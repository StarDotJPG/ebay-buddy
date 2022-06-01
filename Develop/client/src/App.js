import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import Search from "./components/Search/index.js";
import Appbar from "./components/Appbar/index.js";

function App() {
  return (
    <>
        <Appbar />
        <Search />
    </>
  );
}

export default App;