import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import './index.css'
import App from "./App.tsx";
createRoot(document.getElementById("root")!).render(
 <StrictMode>
   <App />
 </StrictMode>);


// comment out, or delete this line
// leave the rest of this file alone

