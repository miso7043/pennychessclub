/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // colors: {
      //   primary: '#4a90e2',
      //   secondary: '#7cb342',
      //   accent: '#ff9800',
      //   tournament: '#e91e63',
      //   founder: '#9c27b0',
      //   contact: '#00bcd4',
      //   resources: '#607d8b',
      // },
      // fontSize: {
      //   // 최대 최소를 지정한 유동적인 폰트 크기
      //   'fluid-xs': 'clamp(0.75rem, 2vw, 0.875rem)',    // 평균: ~0.8rem
      //   'fluid-sm': 'clamp(0.875rem, 2.5vw, 1rem)',     // 평균: ~0.94rem
      //   'fluid-base': 'clamp(1rem, 3vw, 1.125rem)',     // 평균: ~1.06rem
      //   'fluid-lg': 'clamp(1.125rem, 3.5vw, 1.25rem)',  // 평균: ~1.19rem
      //   'fluid-xl': 'clamp(1.25rem, 4vw, 1.5rem)',      // 평균: ~1.38rem
      //   'fluid-2xl': 'clamp(1.5rem, 4.5vw, 2rem)',      // 평균: ~1.75rem
      //   'fluid-3xl': 'clamp(1.875rem, 5vw, 2.5rem)',    // 평균: ~2.19rem
      //   'fluid-4xl': 'clamp(2rem, 5vw, 3rem)',          // 평균: ~2.5rem
      //   'fluid-5xl': 'clamp(2.5rem, 6vw, 4rem)',        // 평균: ~3.25rem
      // },
    },
  },
  plugins: [],
}
