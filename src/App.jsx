import { Routes, Route } from "react-router"
import CountDown from "./components/CountDown"
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
        <Route path="/epic" element={<NasaEpicPage />} />
        <Route path="/launches" element={<Launches />} />
        <Route path="/launches/:id" element={<LaunchesDetails />} />
        <Route path="/countdown" element={<CountDown />} />
      </Routes>
    </div>
  )
}

export default App
