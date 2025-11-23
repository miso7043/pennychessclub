// 메뉴 정보 배열 (데스크탑/모바일 공용)

// 메뉴 정보와 액션 메뉴를 하나의 객체로 관리
export const menuData = {
  main: {
    home: { keyName: 'home', name: 'Home', to: '/' },
    about: {
      keyName: 'about', name: 'About Us', to: '/about',
      submenu: {
        founder: { keyName: 'founder', name: 'Meet The Founder', to: '/founder' },
        teachingMethod: { keyName: 'teachingMethod', name: 'Our Teaching and Training Method', to: '/teaching-method' },
        coaches: { keyName: 'coaches', name: 'Our Coaches', to: '/coaches' },
      }
    },
    tournament: {
      keyName: 'tournament', name: 'Tournament & Event', to: '/tournament',
      submenu: {
        monthlyRapid: { keyName: 'monthlyRapid', name: 'PCC Monthly Rapid & Meetup', to: '/tournament/monthly-rapid' },
        gvct9: { keyName: 'gvct9', name: 'GVCT 9 (Nov 22nd-23rd)', to: '/tournament/gvct-9' },
        bcChessCup: { keyName: 'bcChessCup', name: '2026 BC Chess Cup (Jan 10-11)', to: '/tournament/bc-chess-cup' },
        bcJuniorChampionship: { keyName: 'bcJuniorChampionship', name: 'BC Junior Chess Championship', to: '/tournament/bc-junior-championship' },
        gvct8: { keyName: 'gvct8', name: 'GVCT 8 (June 7th-8th)', to: '/tournament/gvct-8' },
        bcRapidChampionship: { keyName: 'bcRapidChampionship', name: 'BC RAPID CHAMPIONSHIP', to: '/tournament/bc-rapid-championship' },
        pccOpen4: { keyName: 'pccOpen4', name: 'PCC OPEN 4 (April 27th)', to: '/tournament/pcc-open-4' },
        pccOpen5: { keyName: 'pccOpen5', name: 'PCC OPEN 5 (May 25th)', to: '/tournament/pcc-open-5' },
        bcOpen2025: { keyName: 'bcOpenTournament', name: 'BC OPEN TOURNAMENT', to: '/tournament/bc-open-tournament' },
        gvct7: { keyName: 'gvct7', name: 'Greater Vancouver Chess Tournament 7', to: '/tournament/gvct-7' },
        photoGalleries: { keyName: 'photoGalleries', name: 'Photo Galleries', to: '/tournament/photo-galleries' },
      }
    },
    chessClass: { keyName: 'chessClass', name: 'Chess Class', to: '/chess-class' },
    rapidMeetup: { keyName: 'rapidMeetup', name: 'Rapid & Meetup', to: '/rapid-meetup' },
    // shop: { keyName: 'shop', name: 'Shop', to: '/shop' },
  },
  action: {
    login: { keyName: 'login', name: 'Log In', to: '/login' },
    cart: { keyName: 'cart', name: 'Cart', to: '/cart' },
  }
};
