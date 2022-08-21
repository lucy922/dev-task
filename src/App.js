import "./App.css";
import Tabs from "./components/Tabs";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Tabs />
      </Router>
    </div>
  );
}

export default App;
