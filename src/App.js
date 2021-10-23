import React from "react";

// import { ApolloClient, InMemoryCache } from '@apollo/client'
// import { ApolloProvider } from '@apollo/client'
import Navbar from './components/Navbar';
import "./App.css";
import Piano from "./Piano";
// import { Route } from 'react-router-dom';
import Recording from "./components/record/Recording";

function App() {
  return (
    <div className="app-container">
      <nav><Navbar />
      </nav>
      <br />
      <div classNmae="piano-keyboard">
        <Piano />
        </div>
        <div classNmae="recording-controls">
        <Recording />
        </div>
      </div>
  );
}
export default App