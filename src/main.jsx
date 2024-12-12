import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import image from "/exchange.jpg";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <div className="w-screen h-screen relative">
      <img src={image} alt="" className="w-screen h-full object-cover" />
      <div className="absolute inset-0 flex items-center justify-center">
        <App />
      </div>
    </div>
  </StrictMode>
);
