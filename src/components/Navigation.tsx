import { Link, useLocation } from 'react-router-dom';
import { menuData } from '../constance/menuInfo';
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
          {Object.values(menuData.main).map(item => (
            <li key={item.keyName} className={mainStyle.nav.item}>
              <Link to={item.to} className={mainStyle.nav.link}>{item.name}</Link>
              {'submenu' in item && item.submenu && (
                <ul className={item.name === 'Tournament & Event' ? mainStyle.nav.dropdownWide : mainStyle.nav.dropdown}>
                  {Object.values(item.submenu).map(sub => (
                    <li key={sub.keyName}>
                      <Link to={sub.to} className={mainStyle.nav.linkDropdown}>{sub.name}</Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>

        {/* Desktop Right side actions */}
        {/* <div className="hidden lg:flex items-center gap-4">
          {Object.values(menuData.action).map(action => (
            <Link key={action.keyName} to={action.to} className={mainStyle.nav.linkAction}>
              {action.name === 'Cart' ? (
                <span className="flex items-center gap-2">
                  <span>Cart</span>
                  <span className="bg-white text-primary rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">0</span>
                </span>
              ) : action.name}
            </Link>
          ))}
        </div> */}
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-slate-200/95 backdrop-blur-md">
          <ul className="flex flex-col p-4">
            {Object.values(menuData.main).map(item => (
              <li key={item.keyName} className="border-b border-gray-300">
                {'submenu' in item && item.submenu ? (
                  <>
                    <button
                      className="w-full text-left py-3 px-4 text-black font-bold hover:bg-amber-100 flex justify-between items-center"
                      onClick={() => toggleSubmenu(item.keyName)}
                    >
                      {item.name}
                      <svg className={`w-4 h-4 transition-transform ${openSubmenu === item.keyName ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    {openSubmenu === item.keyName && (
                      <ul className={item.name === 'Tournament & Event' ? 'bg-orange-100/90 backdrop-blur-md' : 'bg-white/90 backdrop-blur-md'}>
                        {Object.values(item.submenu).map(sub => (
                          <li key={sub.keyName}>
                            <Link to={sub.to} className="block py-2 px-8 text-gray-800 hover:bg-lime-200" onClick={() => setIsMenuOpen(false)}>{sub.name}</Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </>
                ) : (
                  <Link to={item.to} className="block py-3 px-4 text-black font-bold hover:bg-amber-100" onClick={() => setIsMenuOpen(false)}>
                    {item.name}
                  </Link>
                )}
              </li>
            ))}
            {/* Mobile Login & Cart */}
            {/* {Object.values(menuData.action).map(action => (
              <li key={action.keyName} className="border-b border-gray-300">
                <Link to={action.to} className={`block py-3 px-4 text-black font-bold hover:bg-amber-100${action.name === 'Cart' ? ' flex items-center gap-2' : ''}`} onClick={() => setIsMenuOpen(false)}>
                  {action.name === 'Cart' ? (
                    <>
                      <span>Cart</span>
                      <span className="bg-white text-primary rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">0</span>
                    </>
                  ) : action.name}
                </Link>
              </li>
            ))} */}
          </ul>
        </div>
      )}
    </nav>
    </>
  );
}
