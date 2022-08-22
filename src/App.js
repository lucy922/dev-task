import "./App.css";
import Index from "./components/Index";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Success from "./components/Success";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="card">
          <Router>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/success" element={<Success />} />
            </Routes>
          </Router>
        </div>
      </div>
    </div>
  );
}

export default App;
