import { Routes, Route } from "react-router"
import Home from "./pages/Home"
import UpcomingLaunches from "./pages/UpcomingLaunches"

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/upcominglaunches" element={<UpcomingLaunches />} />
      </Routes>
    </div>
  )
}

export default App
