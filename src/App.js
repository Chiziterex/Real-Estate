import React from 'react';
import './App.css';
import './Mobile.css';
import ScrollToTop from './components/ScrollToTop';
import Slider from './components/slider';
import About from './components/about';
import NoPage from './components//nopage';
import Buy from './components/buy';
import Rent from './components/rent';
import OilandGas from './components/oilgas';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
      <ScrollToTop />
      <Routes>
          <Route index element={<Slider />} />
          <Route path="/slider" element={<Slider />} />
          <Route path="/about" element={<About />} />
          <Route path="/buy" element={<Buy />} />
          <Route path="/rent" element={<Rent />} />
          <Route path="/oilandgas" element={<OilandGas />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
