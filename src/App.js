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
        <Link to="/about">web site</Link>
      </div>
    </header>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
    </Routes>
    <footer>  
      <div>
      <a href="https://www.instagram.com/pokemon_journey_episode_hindi/"><img className="instagram" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/2048px-Instagram_icon.png"/> Instagram</a>
      </div>
      <div>
      <a href="https://t.me/+996700047017"><img className="telegram" src="https://1000logos.net/wp-content/uploads/2021/04/Telegram-logo.png"/> Telegram</a>
      </div>
    </footer>
  </>
 )
}

export default App;