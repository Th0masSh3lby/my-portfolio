import Home from "./components/Home";
import Projects from "./components/Projects";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/my-portfolio" element={<Home />} />
      <Route path="/my-portfolio/projects" element={<Projects />} />
    </Routes>
  );
}

export default App;
