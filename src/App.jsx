import { Routes, Route } from 'react-router-dom'
import Dashboard from './components/layout/Dashboard'
import Home from './pages/Home'
import Rooms from './pages/Rooms'
import Bookings from './pages/Bookings'
import Guests from './pages/Guests'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />}>
        <Route index element={<Home />} />
        <Route path="rooms" element={<Rooms />} />
        <Route path="bookings" element={<Bookings />} />
        <Route path="guests" element={<Guests />} />
      </Route>
    </Routes>
  )
}

export default App