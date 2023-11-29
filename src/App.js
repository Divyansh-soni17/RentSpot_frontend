import "./index.css";
import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home.js";
import Navbar from "./components/Navbar.js";
 

function App() {
  return (
     
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
       
      </Routes>
    </Router>
    
  );
}

export default App;
