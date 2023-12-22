import React from "react";
import "./App.css";

// import Router
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// import Component
import Header from "./component/Header";
import Footer from "./component/Footer";


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