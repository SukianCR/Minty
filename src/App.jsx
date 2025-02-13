import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import store from "./app/store.js";
import { Provider } from "react-redux";
import "bootstrap-icons/font/bootstrap-icons.css";

import Nav_Bar from "./components/home/Nav_Bar.jsx";
import Home from "./components/home/Home.jsx";
import About from "./components/home/About.jsx";
import Resume from "./components/home/Resume.jsx";
import Contact from "./components/home/Contact.jsx";
import Garden from "./components/garden/Garden.jsx";
import Artists from "./components/artists/Artists.jsx";
import FSWA from "./components/FSWA/FSWA.jsx";

function App() {
  return (
    <Provider store={store}>
      <Nav_Bar />

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/garden" element={<Garden />}></Route>
        <Route path="/artists" element={<Artists />}></Route>
        <Route path="/fswa" element={<FSWA />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/resume" element={<Resume />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
    </Provider>
  );
}

export default App;
