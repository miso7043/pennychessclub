import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import Founder from '../pages/Founder';
import TeachingMethod from '../pages/TeachingMethod';
import Coaches from '../pages/Coaches';
import Tournament from '../pages/Tournament';
import MonthlyRapid from '../pages/tournament/MonthlyRapid';
import GVCT9 from '../pages/tournament/GVCT9';
import BCChessCup2026 from '../pages/tournament/BCChessCup2026';
import BCJuniorChampionship2025 from '../pages/tournament/BCJuniorChampionship2025';
import GVCT8 from '../pages/tournament/GVCT8';
import BCRapidChampionship2025 from '../pages/tournament/BCRapidChampionship2025';
import PCCOpen4 from '../pages/tournament/PCCOpen4';
import PCCOpen5 from '../pages/tournament/PCCOpen5';
import BCOpen2025 from '../pages/tournament/BCOpen2025';
import GVCT7 from '../pages/tournament/GVCT7';
import PhotoGalleries from '../pages/tournament/PhotoGalleries';
import ChessClass from '../pages/ChessClass';
import RapidMeetup from '../pages/RapidMeetup';
import Shop from '../pages/Shop';
import Login from '../pages/Login';
import Cart from '../pages/Cart';

export default function AppRoutes() {
  return (
    <Routes>
      {/* Home */}
      <Route path="/" element={<Home />} />
      
      {/* About Us */}
      <Route path="/about" element={<About />} />
      <Route path="/founder" element={<Founder />} />
      <Route path="/teaching-method" element={<TeachingMethod />} />
      <Route path="/coaches" element={<Coaches />} />
      
      {/* Tournament & Event */}
      <Route path="/tournament" element={<Tournament />} />
      <Route path="/tournament/monthly-rapid" element={<MonthlyRapid />} />
      <Route path="/tournament/gvct-9" element={<GVCT9 />} />
      <Route path="/tournament/bc-chess-cup-2026" element={<BCChessCup2026 />} />
      <Route path="/tournament/bc-junior-championship-2025" element={<BCJuniorChampionship2025 />} />
      <Route path="/tournament/gvct-8" element={<GVCT8 />} />
      <Route path="/tournament/bc-rapid-championship-2025" element={<BCRapidChampionship2025 />} />
      <Route path="/tournament/pcc-open-4" element={<PCCOpen4 />} />
      <Route path="/tournament/pcc-open-5" element={<PCCOpen5 />} />
      <Route path="/tournament/bc-open-2025" element={<BCOpen2025 />} />
      <Route path="/tournament/gvct-7" element={<GVCT7 />} />
      <Route path="/tournament/photo-galleries" element={<PhotoGalleries />} />
      
      {/* Chess Class */}
      <Route path="/chess-class" element={<ChessClass />} />
      
      {/* Rapid & Meetup */}
      <Route path="/rapid-meetup" element={<RapidMeetup />} />
      
      {/* Shop */}
      <Route path="/shop" element={<Shop />} />
      
      {/* Login & Cart */}
      <Route path="/login" element={<Login />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
  );
}
