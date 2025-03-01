import { Box, Flex } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";

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
import { BrowserRouter as Router } from "react-router-dom";
import Service from "./pages/Service";
import Users from "./pages/Users";
import UsersRole from "./pages/UsersRole";

const AppRouter = () => {
  return (
    <Router
      basename="coreit"
      future={{ v7_startTransition: true, v7_relativeSplatPath: true }}
    >
      <Flex
        direction="column"
        minH="100vh"
        maxW={{ xl: "1200px" }}
        mx="auto"
        bg={"gray.100"}
      >
        <Header />
        <Flex flex="1">
          <Box flex="1">
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
          </Box>
        </Flex>
        <Footer />
      </Flex>
    </Router>
  );
};

export default AppRouter;