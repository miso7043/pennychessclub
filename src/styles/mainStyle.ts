/**
 * mainStyle.ts
 * 프로젝트 전체에서 사용되는 공통 Tailwind CSS 스타일 정의
 * 
 * 사용법:
 * import { mainStyle } from '@/styles/mainStyle';
 * <div className={mainStyle.pageContainer}>...</div>
 */

export const mainStyle = {
  // 페이지 레이아웃
  pageContainer: 'animate-fadeIn',
  
  // 제목 스타일
  h1: {
    primary: 'text-primary text-4xl font-bold mb-8',
    secondary: 'text-secondary text-4xl font-bold mb-8',
    accent: 'text-accent text-4xl font-bold mb-8',
    tournament: 'text-tournament text-4xl font-bold mb-8',
    founder: 'text-founder text-4xl font-bold mb-8',
    contact: 'text-contact text-4xl font-bold mb-8',
    resources: 'text-resources text-4xl font-bold mb-8',
  },
  
  h2: 'text-gray-800 text-3xl font-semibold mt-0 mb-4',
  h3: 'text-gray-700 text-xl font-medium mt-0 mb-2',
  
  // 섹션 스타일
  section: 'mb-12 p-6 bg-gray-50 rounded-lg',
  
  // 텍스트 스타일
  text: {
    body: 'text-gray-700',
    muted: 'text-gray-600',
    small: 'text-gray-600 text-sm',
  },
  
  // 카드 스타일
  card: 'bg-white p-4 rounded shadow-sm',
  cardMb: 'bg-white p-4 mb-4 rounded shadow-sm',
  
  // 그리드 레이아웃
  grid: {
    cols1: 'grid grid-cols-1 gap-4',
    cols2: 'grid grid-cols-1 md:grid-cols-2 gap-4',
    cols3: 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4',
    cols2Gap6: 'grid grid-cols-1 md:grid-cols-2 gap-6',
    cols3Gap6: 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6',
  },
  
  // 리스트 스타일
  list: {
    default: 'list-inside list-disc pl-4',
    item: 'mb-2 leading-relaxed text-gray-700',
  },
  
  // 버튼 스타일
  button: {
    primary: 'px-6 py-3 bg-primary text-white rounded-lg hover:bg-blue-600 transition-colors font-medium',
    secondary: 'px-6 py-3 bg-secondary text-white rounded-lg hover:bg-green-600 transition-colors font-medium',
    accent: 'px-6 py-3 bg-accent text-white rounded-lg hover:bg-orange-600 transition-colors font-medium',
    disabled: 'px-6 py-3 bg-gray-300 text-gray-500 rounded-lg cursor-not-allowed font-medium',
  },
  
  // 링크 스타일
  link: {
    primary: 'text-primary hover:underline',
  },
  
  // 폼 스타일
  form: {
    label: 'block text-gray-700 font-medium mb-2',
    input: 'w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary',
    textarea: 'w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary resize-none',
    select: 'w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary',
  },
  
  // 이미지 스타일
  image: {
    responsive: 'w-full h-full object-cover',
    aspectVideo: 'relative w-full aspect-video overflow-hidden rounded-lg',
    aspectSquare: 'aspect-square bg-gray-200 rounded mb-4 flex items-center justify-center',
  },
  
  // 상태 메시지 스타일
  alert: {
    error: 'bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg',
    success: 'bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg',
    warning: 'bg-yellow-50 border border-yellow-200 text-yellow-700 px-4 py-3 rounded-lg',
    info: 'bg-blue-50 border border-blue-200 text-blue-700 px-4 py-3 rounded-lg',
  },
  
  // 로딩 스타일
  loading: {
    container: 'flex items-center justify-center min-h-[200px]',
    spinner: 'animate-spin rounded-full h-12 w-12 border-b-2 border-primary',
  },
  
  // 네비게이션 스타일
  nav: {
    main: 'bg-slate-200/80 backdrop-blur-md text-black sticky top-0 z-50 shadow-md',
    container: 'max-w-7xl mx-auto px-8 flex items-center justify-between',
    menu: 'flex list-none gap-2 m-0 p-0',
    item: 'relative group',
    link: 'text-black no-underline block rounded hover:bg-amber-100 transition-colors px-4 py-3 text-lg font-bold',
    linkAction: 'text-black no-underline hover:bg-amber-100 rounded transition-colors px-4 py-2 text-lg font-bold',
    linkDropdown: 'text-gray-800 no-underline block hover:bg-lime-200 transition-colors px-4 py-2 text-base font-semibold',
    dropdown: 'hidden group-hover:block absolute top-full left-0 bg-white/90 backdrop-blur-md min-w-[200px] shadow-lg rounded mt-0 py-2 list-none',
    dropdownWide: 'hidden group-hover:block absolute top-full left-0 bg-orange-100/90 backdrop-blur-md min-w-[280px] shadow-lg rounded mt-0 py-2 list-none',
  },
  
  // 유틸리티
  utils: {
    centerContainer: 'max-w-7xl mx-auto p-8',
    flexCenter: 'flex items-center justify-center',
    flexBetween: 'flex items-center justify-between',
    textCenter: 'text-center',
  },
} as const;

// 타입 정의를 위한 export
export type MainStyle = typeof mainStyle;
