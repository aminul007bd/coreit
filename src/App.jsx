import {
  Box,
  ChakraProvider,
  Flex,
  createSystem,
  defaultConfig,
} from "@chakra-ui/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import { AuthProvider } from "./contexts/AuthContext";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Footer from "./components/common/Footer";
import Forget from "./pages/Forget";
import HeaderWithoutNav from "./components/common/HeaderWithoutNav";
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

export const customTheme = createSystem(defaultConfig, {
  theme: {
    tokens: {
      fonts: {
        heading: { value: `'Figtree', sans-serif` },
        body: { value: `'Figtree', sans-serif` },
      },
    },
  },
});

function App() {
  return (
    <ChakraProvider value={customTheme}>
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <Router basename="/coreit">
            <Flex direction="column" minH="100vh">
              <HeaderWithoutNav />
              <Flex flex="1">
                <LeftNav />
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
        </AuthProvider>
      </QueryClientProvider>
    </ChakraProvider>
  );
}

export default App;
