import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Data from "./data";
import PreLoadScreen from "./components/PreLoadScreen";
import Placeholder from "./components/Placeholder";

function App() {
  return (
    <div className="App">
      <PreLoadScreen />
      <Data />
      <Placeholder />
    </div>
  );
}

export default App;
