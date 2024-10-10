import React from 'react';
import './App.css';
import './Mobile.css';
import Slider from './components/slider';
import Home from './components/home';
import About from './components/about';
import NoPage from './components//nopage';
import Buy from './components/buy';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
          <Route index element={<Slider />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/buy" element={<Buy />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
