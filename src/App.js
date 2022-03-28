import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { Wishlist } from "./components/Wishlist";
import { Add } from "./components/Add";
import "./App.css";

function App() {
  return (
    <Router>
      <Header />

      <Routes>
        <Route exact path="/" element={<Wishlist />} />

        <Route path="/add" element={<Add />} />
      </Routes>
    </Router>
  );
}

export default App;
