import "./css/index.css";

import App from "./App.jsx";
import { Provider } from "../src/components/ui/provider.jsx";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider>
      <App />
    </Provider>
  </StrictMode>
);
