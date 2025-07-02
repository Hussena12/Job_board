import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { ContextProvider } from "./contexts/ContextProvider";
import { AuthContextProvider } from "./contexts/AuthContext";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthContextProvider>
      <ContextProvider>
        <App />
      </ContextProvider>
    </AuthContextProvider>
  </StrictMode>
);
