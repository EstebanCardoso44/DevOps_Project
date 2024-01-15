import React from "react";
import {BrowserRouter,Route,Routes,} from "react-router-dom";
import Navbar from "./navbar";
import Home from "./home";
import Contact from "./Contact";
import './App.css'

function App() {
  return (
      <BrowserRouter>
          <div className="navbar">
              <Navbar/>
          </div>
              <Routes>
                  <Route exact path="/"  element={<Home></Home>}/>
                  <Route path="Contact" element={<Contact></Contact>}/>
              </Routes>
      </BrowserRouter>
  );
}

export default App;