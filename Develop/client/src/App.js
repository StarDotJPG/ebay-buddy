import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import Header from "./components/Header.jsx";
import Search from "./components/Search.jsx";
import Item from "./components/Item.jsx"

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div>
      <Header />
      <main>
      <Search />
      <Item/>
      </main>
    </div>
  );
}

export default App;
