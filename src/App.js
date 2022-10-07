import React from "react";
import "./App.css"
import { Routes, Route, Link } from "react-router-dom";
import About from "./header/About";
import Home from "./header/Home";

function App() {
 return( <>
    <header>
      <div className="nav">
        <Link to="/">Home</Link>
        <Link to="/about">about</Link>
      </div>
    </header>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
    </Routes>
    {/* <footer>  
      <a href="https://www.instagram.com/karybaevv_.09/"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/2048px-Instagram_icon.png"/> Instagram</a>
    </footer> */}
  </>
 )
}

export default App;