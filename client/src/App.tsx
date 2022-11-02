import React from "react";
import "./App.css";
import Toolbar from "./components/Toolbar";
import AddItem from "./components/AddItem/AddItem";

const App = () => {
  return (
    <div>
      <Toolbar />
      <AddItem />
    </div>
  );
};

export default App;
