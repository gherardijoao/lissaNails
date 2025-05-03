import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import "./App.css";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Add additional routes as needed */}
        {/* <Route path="/servicos" element={<Services />} /> */}
        {/* <Route path="/contato" element={<Contact />} /> */}
      </Routes>
    </Router>
  );
};

export default App;
