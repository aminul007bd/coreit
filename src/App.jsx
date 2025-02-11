import { QueryClient, QueryClientProvider } from "react-query";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import { AuthProvider } from "./contexts/AuthContext";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Footer from "./components/common/Footer";
import Forget from "./pages/Forget";
import Header from "./components/common/Header";
import Home from "./pages/Home";
import Job from "./pages/Job";
import JobDetail from "./pages/JobDetail";
import LeftNav from "./components/LeftNav";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Service from "./pages/Service";
import Users from "./pages/Users";
import UsersRole from "./pages/UsersRole";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <Router basename="/coreit">
          <div className="max-w-screen-xl mx-auto border-2 border-gray-200">
            <Header />
            <LeftNav />
            <main className="flex-grow">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/forget" element={<Forget />} />
                <Route path="/job" element={<Job />} />
                <Route path="/job/:id" element={<JobDetail />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/service" element={<Service />} />
                <Route path="/users" element={<Users />} />
                <Route path="/users/role" element={<UsersRole />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </Router>
      </AuthProvider>
    </QueryClientProvider>
  );
}

export default App;
