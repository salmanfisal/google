import "./App.css";
import React from "react";
import Home from "./home.js";
import Searchpage from './searchpage.js'
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}>
        </Route>
        <Route path="/search" element={<Searchpage/>}>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
