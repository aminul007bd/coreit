import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import { AuthProvider } from "./contexts/AuthContext";
import Header from "./components/common/Header";
import Home from "./pages/Home";
import Login from "./pages/Login";
import React from "react";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
