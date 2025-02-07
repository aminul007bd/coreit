import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import { AuthProvider } from "./contexts/AuthContext";
import Footer from "./components/common/Footer";
import Forget from "./pages/Forget";
import Header from "./components/common/Header";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="max-w-screen-xl mx-auto border-2 border-gray-200">
          <Header />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/register" element={<Register />} />
              <Route path="/forgot-password" element={<Forget />} />
              <Route path="/login" element={<Login />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
