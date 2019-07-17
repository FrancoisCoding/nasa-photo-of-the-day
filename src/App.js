import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Cards from "./components/Cards";
import Data from "./data";

function App() {
  return (
    <div className="App">
      <Data />
      <Cards />
    </div>
  );
}

export default App;
