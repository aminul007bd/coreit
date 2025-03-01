import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import AppRouter from "./AppRouter";
import { ChakraProvider } from "@chakra-ui/react";
import { UserProvider } from "./contexts/UserContext";
import customTheme from "../theme";

const queryClient = new QueryClient();

function App() {
  return (
    <ChakraProvider value={customTheme}>
      <QueryClientProvider client={queryClient}>
        <UserProvider>
          <AppRouter />
        </UserProvider>
      </QueryClientProvider>
    </ChakraProvider>
  );
}

export default App;
