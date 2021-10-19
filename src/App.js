import React from "react";
import { ApolloClient, InMemoryCache } from '@apollo/client'
import { ApolloProvider } from '@apollo/client'
import Navbar from './components/Navbar';
import "./App.css";
import Piano from "./Piano";
import { BrowserRouter } from 'react-router-dom';
import Recording from "./components/record/Recording";

const client = new ApolloClient({
  cache: new InMemoryCache(),
  request: operation => {
    const token = localStorage.getItem("id-token")
    operation.setContext(({ headers = {} }) => ({
      headers: {
        ...headers,
        authorization: localStorage.getItem(token) || "",
      }
    }))
  }
})

function App() {
  return (

    <ApolloProvider client={client}>
      <BrowserRouter>
        <Navbar />
        <div className="app-container">
          <Piano />
          <Recording />
        </div>
      </BrowserRouter>
      
    </ApolloProvider>

  );
}
export default App
