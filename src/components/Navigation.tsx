import { Link, useLocation } from 'react-router-dom';
// 페이지 이동 시 상단으로 스크롤
import React from 'react';
function ScrollToTop() {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}
import { useState } from 'react';
import {mainStyle} from '../styles/mainStyle';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);

  const toggleSubmenu = (menu: string) => {
    setOpenSubmenu(openSubmenu === menu ? null : menu);
  };

  return (
    <>
      <ScrollToTop />
      <nav className={mainStyle.nav.main}>
      <div className={mainStyle.nav.container}>
        <Link to="/" className="flex items-center no-underline">
          <img src="/imgs/pennyChessClub_logo.svg" alt="Penny Chess Club" className="h-22 w-auto my-2" />
        </Link>
        
        {/* Hamburger Button */}
        <button
          className="lg:hidden text-black p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* Desktop Menu */}
        <ul className={`${mainStyle.nav.menu} hidden lg:flex`}>
          {/* Home */}
          <li className={mainStyle.nav.item}>
            <Link to="/" className={mainStyle.nav.link}>
              Home
            </Link>
          </li>

          {/* About Us */}
          <li className={mainStyle.nav.item}>
            <Link to="/about" className={mainStyle.nav.link}>
              About Us
            </Link>
            <ul className={mainStyle.nav.dropdown}>
              <li><Link to="/founder" className={mainStyle.nav.linkDropdown}>Meet The Founder</Link></li>
              <li><Link to="/teaching-method" className={mainStyle.nav.linkDropdown}>Our Teaching and Training Method</Link></li>
              <li><Link to="/coaches" className={mainStyle.nav.linkDropdown}>Our Coaches</Link></li>
            </ul>
          </li>

          {/* Tournament & Event */}
          <li className={mainStyle.nav.item}>
            <Link to="/tournament" className={mainStyle.nav.link}>
              Tournament & Event
            </Link>
            <ul className={mainStyle.nav.dropdownWide}>
              <li><Link to="/tournament/monthly-rapid" className={mainStyle.nav.linkDropdown}>PCC Monthly Rapid & Meetup</Link></li>
              <li><Link to="/tournament/gvct-9" className={mainStyle.nav.linkDropdown}>GVCT 9 (Nov 22nd-23rd)</Link></li>
              <li><Link to="/tournament/bc-chess-cup-2026" className={mainStyle.nav.linkDropdown}>2026 BC Chess Cup (Jan 10-11)</Link></li>
              <li><Link to="/tournament/bc-junior-championship-2025" className={mainStyle.nav.linkDropdown}>BC Junior Chess Championship 2025</Link></li>
              <li><Link to="/tournament/gvct-8" className={mainStyle.nav.linkDropdown}>GVCT 8 (June 7th-8th)</Link></li>
              <li><Link to="/tournament/bc-rapid-championship-2025" className={mainStyle.nav.linkDropdown}>2025 BC RAPID CHAMPIONSHIP</Link></li>
              <li><Link to="/tournament/pcc-open-4" className={mainStyle.nav.linkDropdown}>PCC OPEN 4 (April 27th)</Link></li>
              <li><Link to="/tournament/pcc-open-5" className={mainStyle.nav.linkDropdown}>PCC OPEN 5 (May 25th)</Link></li>
              <li><Link to="/tournament/bc-open-2025" className={mainStyle.nav.linkDropdown}>BC OPEN 2025</Link></li>
              <li><Link to="/tournament/gvct-7" className={mainStyle.nav.linkDropdown}>Greater Vancouver Chess Tournament 7</Link></li>
              <li><Link to="/tournament/photo-galleries" className={mainStyle.nav.linkDropdown}>Photo Galleries</Link></li>
            </ul>
          </li>

          {/* Chess Class */}
          <li className={mainStyle.nav.item}>
            <Link to="/chess-class" className={mainStyle.nav.link}>
              Chess Class
            </Link>
          </li>

          {/* Rapid & Meetup */}
          <li className={mainStyle.nav.item}>
            <Link to="/rapid-meetup" className={mainStyle.nav.link}>
              Rapid & Meetup
            </Link>
          </li>

          {/* Shop */}
          <li className={mainStyle.nav.item}>
            <Link to="/shop" className={mainStyle.nav.link}>
              Shop
            </Link>
          </li>
        </ul>

        {/* Desktop Right side actions */}
        <div className="hidden lg:flex items-center gap-4">
          <Link to="/login" className={mainStyle.nav.linkAction}>
            Log In
          </Link>
          <Link to="/cart" className={`${mainStyle.nav.linkAction} flex items-center gap-2`}>
            <span>Cart</span>
            <span className="bg-white text-primary rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">0</span>
          </Link>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-slate-200/95 backdrop-blur-md">
          <ul className="flex flex-col p-4">
            {/* Home */}
            <li className="border-b border-gray-300">
              <Link to="/" className="block py-3 px-4 text-black font-bold hover:bg-amber-100" onClick={() => setIsMenuOpen(false)}>
                Home
              </Link>
            </li>

            {/* About Us */}
            <li className="border-b border-gray-300">
              <button
                className="w-full text-left py-3 px-4 text-black font-bold hover:bg-amber-100 flex justify-between items-center"
                onClick={() => toggleSubmenu('about')}
              >
                About Us
                <svg className={`w-4 h-4 transition-transform ${openSubmenu === 'about' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openSubmenu === 'about' && (
                <ul className="bg-white/90 backdrop-blur-md">
                  <li><Link to="/founder" className="block py-2 px-8 text-gray-800 hover:bg-lime-200" onClick={() => setIsMenuOpen(false)}>Meet The Founder</Link></li>
                  <li><Link to="/teaching-method" className="block py-2 px-8 text-gray-800 hover:bg-lime-200" onClick={() => setIsMenuOpen(false)}>Our Teaching and Training Method</Link></li>
                  <li><Link to="/coaches" className="block py-2 px-8 text-gray-800 hover:bg-lime-200" onClick={() => setIsMenuOpen(false)}>Our Coaches</Link></li>
                </ul>
              )}
            </li>

            {/* Tournament & Event */}
            <li className="border-b border-gray-300">
              <button
                className="w-full text-left py-3 px-4 text-black font-bold hover:bg-amber-100 flex justify-between items-center"
                onClick={() => toggleSubmenu('tournament')}
              >
                Tournament & Event
                <svg className={`w-4 h-4 transition-transform ${openSubmenu === 'tournament' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openSubmenu === 'tournament' && (
                <ul className="bg-orange-100/90 backdrop-blur-md">
                  <li><Link to="/tournament/monthly-rapid" className="block py-2 px-8 text-gray-800 hover:bg-lime-200" onClick={() => setIsMenuOpen(false)}>PCC Monthly Rapid & Meetup</Link></li>
                  <li><Link to="/tournament/gvct-9" className="block py-2 px-8 text-gray-800 hover:bg-lime-200" onClick={() => setIsMenuOpen(false)}>GVCT 9 (Nov 22nd-23rd)</Link></li>
                  <li><Link to="/tournament/bc-chess-cup-2026" className="block py-2 px-8 text-gray-800 hover:bg-lime-200" onClick={() => setIsMenuOpen(false)}>2026 BC Chess Cup (Jan 10-11)</Link></li>
                  <li><Link to="/tournament/bc-junior-championship-2025" className="block py-2 px-8 text-gray-800 hover:bg-lime-200" onClick={() => setIsMenuOpen(false)}>BC Junior Chess Championship 2025</Link></li>
                  <li><Link to="/tournament/gvct-8" className="block py-2 px-8 text-gray-800 hover:bg-lime-200" onClick={() => setIsMenuOpen(false)}>GVCT 8 (June 7th-8th)</Link></li>
                  <li><Link to="/tournament/bc-rapid-championship-2025" className="block py-2 px-8 text-gray-800 hover:bg-lime-200" onClick={() => setIsMenuOpen(false)}>2025 BC RAPID CHAMPIONSHIP</Link></li>
                  <li><Link to="/tournament/pcc-open-4" className="block py-2 px-8 text-gray-800 hover:bg-lime-200" onClick={() => setIsMenuOpen(false)}>PCC OPEN 4 (April 27th)</Link></li>
                  <li><Link to="/tournament/pcc-open-5" className="block py-2 px-8 text-gray-800 hover:bg-lime-200" onClick={() => setIsMenuOpen(false)}>PCC OPEN 5 (May 25th)</Link></li>
                  <li><Link to="/tournament/bc-open-2025" className="block py-2 px-8 text-gray-800 hover:bg-lime-200" onClick={() => setIsMenuOpen(false)}>BC OPEN 2025</Link></li>
                  <li><Link to="/tournament/gvct-7" className="block py-2 px-8 text-gray-800 hover:bg-lime-200" onClick={() => setIsMenuOpen(false)}>Greater Vancouver Chess Tournament 7</Link></li>
                  <li><Link to="/tournament/photo-galleries" className="block py-2 px-8 text-gray-800 hover:bg-lime-200" onClick={() => setIsMenuOpen(false)}>Photo Galleries</Link></li>
                </ul>
              )}
            </li>

            {/* Chess Class */}
            <li className="border-b border-gray-300">
              <Link to="/chess-class" className="block py-3 px-4 text-black font-bold hover:bg-amber-100" onClick={() => setIsMenuOpen(false)}>
                Chess Class
              </Link>
            </li>

            {/* Rapid & Meetup */}
            <li className="border-b border-gray-300">
              <Link to="/rapid-meetup" className="block py-3 px-4 text-black font-bold hover:bg-amber-100" onClick={() => setIsMenuOpen(false)}>
                Rapid & Meetup
              </Link>
            </li>

            {/* Shop */}
            <li className="border-b border-gray-300">
              <Link to="/shop" className="block py-3 px-4 text-black font-bold hover:bg-amber-100" onClick={() => setIsMenuOpen(false)}>
                Shop
              </Link>
            </li>

            {/* Mobile Login & Cart */}
            <li className="border-b border-gray-300">
              <Link to="/login" className="block py-3 px-4 text-black font-bold hover:bg-amber-100" onClick={() => setIsMenuOpen(false)}>
                Log In
              </Link>
            </li>
            <li>
              <Link to="/cart" className="block py-3 px-4 text-black font-bold hover:bg-amber-100 flex items-center gap-2" onClick={() => setIsMenuOpen(false)}>
                <span>Cart</span>
                <span className="bg-white text-primary rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">0</span>
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
    </>
  );
}
