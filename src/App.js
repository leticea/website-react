import { BrowserRouter } from "react-router-dom";
import { Router } from "./Router";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";

import "./App.css";

export function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Router />
        <Footer />
      </BrowserRouter>
    </div>
  );
}
