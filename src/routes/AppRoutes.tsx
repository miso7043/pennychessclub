import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import Founder from '../pages/Founder';
import TeachingMethod from '../pages/TeachingMethod';
import Coaches from '../pages/Coaches';
import Tournament from '../pages/Tournament';
import MonthlyRapid from '../pages/tournament/MonthlyRapid';
import GVCT9 from '../pages/tournament/GVCT9';
import BCChessCup from '../pages/tournament/BCChessCup';
import BCJuniorChampionship from '../pages/tournament/BCJuniorChampionship';
import GVCT8 from '../pages/tournament/GVCT8';
import BCRapidChampionship from '../pages/tournament/BCRapidChampionship';
import PCCOpen4 from '../pages/tournament/PCCOpen4';
import PCCOpen5 from '../pages/tournament/PCCOpen5';
import BCOpen2025 from '../pages/tournament/BCOpen';
import GVCT7 from '../pages/tournament/GVCT7';
import PhotoGalleries from '../pages/tournament/PhotoGalleries';
import ChessClass from '../pages/ChessClass';
import RapidMeetup from '../pages/RapidMeetup';
import Shop from '../pages/Shop';
import Login from '../pages/Login';
import Cart from '../pages/Cart';

import { menuData } from '../constance/menuInfo';

export default function AppRoutes() {
  return (
    <Routes>
      {/* Home */}
      <Route path="/" element={<Home />} />
      
      {/* About Us */}
      <Route path={menuData.main.about.to} element={<About />} />
      <Route path={menuData.main.about.submenu.founder.to} element={<Founder />} />
      <Route path={menuData.main.about.submenu.teachingMethod.to} element={<TeachingMethod />} />
      <Route path={menuData.main.about.submenu.coaches.to} element={<Coaches />} />
      
      {/* Tournament & Event */}
      <Route path={menuData.main.tournament.to} element={<Tournament />} />
      <Route path={menuData.main.tournament.submenu.monthlyRapid.to} element={<MonthlyRapid />} />
      <Route path={menuData.main.tournament.submenu.gvct9.to} element={<GVCT9 />} />
      <Route path={menuData.main.tournament.submenu.bcChessCup.to} element={<BCChessCup />} />
      <Route path={menuData.main.tournament.submenu.bcJuniorChampionship.to} element={<BCJuniorChampionship />} />
      <Route path={menuData.main.tournament.submenu.gvct8.to} element={<GVCT8 />} />
      <Route path={menuData.main.tournament.submenu.bcRapidChampionship.to} element={<BCRapidChampionship />} />
      <Route path={menuData.main.tournament.submenu.pccOpen4.to} element={<PCCOpen4 />} />
      <Route path={menuData.main.tournament.submenu.pccOpen5.to} element={<PCCOpen5 />} />
      <Route path={menuData.main.tournament.submenu.bcOpen2025.to} element={<BCOpen2025 />} />
      <Route path={menuData.main.tournament.submenu.gvct7.to} element={<GVCT7 />} />
      <Route path={menuData.main.tournament.submenu.photoGalleries.to} element={<PhotoGalleries />} />
      
      {/* Chess Class */}
      <Route path={menuData.main.chessClass.to} element={<ChessClass />} />
      
      {/* Rapid & Meetup */}
      <Route path={menuData.main.rapidMeetup.to} element={<RapidMeetup />} />
      
      {/* Shop */}
      <Route path={menuData.main.shop.to} element={<Shop />} />
      
      {/* Login & Cart */}
      <Route path={menuData.action.login.to} element={<Login />} />
      <Route path={menuData.action.cart.to} element={<Cart />} />
    </Routes>
  );
}
