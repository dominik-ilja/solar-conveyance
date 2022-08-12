import { Routes, Route } from "react-router"
import Header from "./components/Header"
import { Home, Weather, Launches } from "./pages"
import LaunchesDetails from "./pages/LaunchesDetails"
import NasaEpicPage from "./pages/NasaEpicPage"

function App() {
  return (
    <div className="min-h-screen bg-dark">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/weather" element={<Weather />} />
        <Route path="/launches" element={<Launches />} />
        <Route path="/launches/:id" element={<LaunchesDetails />} />
        <Route path="/epic" element={<NasaEpicPage />} />
      </Routes>
    </div>
  )
}

export default App
