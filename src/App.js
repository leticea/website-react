import { BrowserRouter } from "react-router-dom";
import { Router } from "./Router";
import { Navbar } from "./components/Navbar";
import "./App.css";

export function App() {
  return (
    <div className="App">
      <Navbar />
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </div>
  );
}
