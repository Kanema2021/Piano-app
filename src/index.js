import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom"
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import App from "./App";

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

ReactDOM.render(
    <React.StrictMode>
      <Router>
      <ApolloProvider client={client}> 
        <App />
        </ApolloProvider>
      </Router>
    </React.StrictMode>,
    document.getElementById('root')
  );

