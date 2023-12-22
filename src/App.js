import React from "react";
import "./App.css";

// import Router
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// import Component
import Header from "./components/Header";
import Footer from "./components/Footer";


// import Pages


function App() {
  return (
    <React.StrictMode>
        <Header />
        <Footer />
    </React.StrictMode>
  );
}

export default App;