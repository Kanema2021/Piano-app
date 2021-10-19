import React, { useEffect, useState } from "react";
import "./App.css";
import Piano from "./Piano";
// import recordBtn from "./components/record/recordBtn";


function App() {
  return (
    <div className="app-container">
      <Piano />
      <recordBtn />
    </div>
  );
}

export default App;
