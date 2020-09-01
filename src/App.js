import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import GroceryList from "./component/GroceryList";
import GroceryAdd from "./component/GroceryAdd";
import EditGrocery from "./component/EditGrocery";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/" exact component={GroceryList} />
        <Route path="/add" component={GroceryAdd} />
        <Route path="/edit/:id" component={EditGrocery} />
      </Router>
    </div>
  );
}

export default App;
