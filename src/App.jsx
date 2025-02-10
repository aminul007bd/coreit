import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";

import { AuthProvider } from "./contexts/AuthContext";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Footer from "./components/common/Footer";
import Forget from "./pages/Forget";
import Header from "./components/common/Header";
import Home from "./pages/Home";
import Job from "./pages/Job";
import JobDetail from "./pages/JobDetail";
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
            <main className="flex-grow">
              <Routes>
                <Route path="/" element={<Navigate to="/home" />} />
                <Route path="/home" element={<Home />} />
                <Route path="/register" element={<Register />} />
                <Route path="/forgot-password" element={<Forget />} />
                <Route path="/login" element={<Login />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/job" element={<Job />} />
                <Route path="/job-detail" element={<JobDetail />} />
                <Route path="/users" element={<Users />} />
                <Route path="/users-role" element={<UsersRole />} />
                <Route path="/service" element={<Service />} />
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
