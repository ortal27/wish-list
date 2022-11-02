import React from "react";
import "./App.css";
import Toolbar from "./components/Toolbar";
import AddItem from "./components/AddItem/AddItem";
import ItemsList from "./components/ItemsList/ItemsList";

const App = () => {
  return (
    <div>
      <Toolbar />
      <AddItem />
      <ItemsList />
    </div>
  );
};

export default App;
