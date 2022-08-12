import { Routes, Route } from "react-router";
import Header from "./components/Header";
import {Home, Weather, Launches} from "./pages";

function App() {
  return (
    <div className="min-h-screen bg-dark">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/weather" element={<Weather />} />
        <Route path="/launches" element={<Launches />} />
      </Routes>
    </div>
  );
}

export default App;
