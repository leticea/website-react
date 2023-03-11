import { BrowserRouter } from "react-router-dom";
import { Router } from "./Router";
import { Navbar } from "./components/Navbar";
import "./App.css";

export function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Router />
      </BrowserRouter>
    </div>
  );
}
