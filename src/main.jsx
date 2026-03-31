import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import AuthPorvider from "./Providers/AuthPoviders.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthPorvider>
      <App />
    </AuthPorvider>
  </StrictMode>,
);
