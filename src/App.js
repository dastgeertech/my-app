import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HornlinkPIUDashboard from './pages/HornlinkPIUDashboard';
import HornlinkPIUCarriers from './pages/HornlinkPIUCarriers';
import HornlinkPIUPassengers from './pages/HornlinksPIUPassengers';
import HornlinkPIUWatchlist from './pages/HornlinkPIUWatchlist';
import SideBar from './pages/sidebar'

function App() {
  return (
    <Router>
      <div className="flex w-[100%] px-7">
      <div className='w-[20%]'> <SideBar /></div>
      <div className='w-[80%]'>
      <Routes>
          <Route path="/" element={<HornlinkPIUDashboard />} />
          <Route path="/carrier" element={<HornlinkPIUCarriers />} />
          <Route path="/passengers" element={<HornlinkPIUPassengers />} />
          <Route path="/watchlist" element={<HornlinkPIUWatchlist />} />
        </Routes>
      </div>
   
        </div>
    </Router>
  );
}

export default App;
