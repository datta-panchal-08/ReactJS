import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import {BrowserRouter} from 'react-router-dom';

createRoot(document.getElementById("root")).render(
   // By using this line we can add the functionality to navigate to different routes/pages 
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
