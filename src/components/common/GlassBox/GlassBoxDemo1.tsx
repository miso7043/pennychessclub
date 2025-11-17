import React from 'react';
import GlassBox from './GlassBox';
import GlassBox1 from './GlassBox1';

export const GlassBoxDemo: React.FC = () => {
  const backImg = '/imgs/bgs/main-3.webp';
  
  return (
    <div 
      className="p-8 min-h-screen"
      style={{
        backgroundImage: `url(${backImg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="max-w-4xl mx-auto space-y-8">
        <h1 className="text-4xl font-bold text-white text-center mb-12">
          Glass Box Component Demo
        </h1>

        {/* 기본 사용법 */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-white">기본 사이즈</h2>
          <div className="flex flex-wrap gap-4">
            <GlassBox size="small">
              <span className="text-white">Small</span>
            </GlassBox>
            
            <GlassBox size="medium">
              <span className="text-white">Medium</span>
            </GlassBox>
            
            <GlassBox size="large">
              <span className="text-white">Large</span>
            </GlassBox>
          </div>
        </section>

        {/* 둥근 모서리 */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-white">둥근 모서리</h2>
          <div className="flex flex-wrap gap-4">
            <GlassBox size="medium" rounded>
              <span className="text-white">Rounded</span>
            </GlassBox>
            
            <GlassBox size="large" rounded>
              <span className="text-white">Large Rounded</span>
            </GlassBox>
          </div>
        </section>

        {/* 다양한 콘텐츠 */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-white">다양한 콘텐츠</h2>
          <div className="flex flex-wrap gap-4">
            <GlassBox size="large">
              <div className="text-center">
                <div className="w-12 h-12 bg-white rounded-full mx-auto mb-2 flex items-center justify-center">
                  <span className="text-2xl">📱</span>
                </div>
                <span className="text-white">앱 아이콘</span>
              </div>
            </GlassBox>
            
            <GlassBox size="large" rounded>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-r from-pink-500 to-violet-500 rounded-full"></div>
                <div>
                  <p className="text-white font-medium">사용자 이름</p>
                  <p className="text-gray-300 text-sm">상태 메시지</p>
                </div>
              </div>
            </GlassBox>
            
            <GlassBox size="large">
              <div className="text-center">
                <h3 className="text-white font-bold mb-2">카드 제목</h3>
                <p className="text-gray-300 text-sm">
                  글래스모피즘 효과가 적용된 카드입니다.
                </p>
                <button className="mt-3 px-4 py-2 bg-white bg-opacity-20 text-white rounded-lg hover:bg-opacity-30 transition-all">
                  버튼
                </button>
              </div>
            </GlassBox>
          </div>
        </section>

        {/* 네비게이션 바 예시 */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-white">네비게이션 바</h2>
          <GlassBox className="w-full">
            <nav className="flex justify-between items-center w-full">
              <div className="flex items-center space-x-4">
                <span className="text-white font-bold text-xl">LOGO</span>
              </div>
              <div className="flex items-center space-x-6">
                <a href="#" className="text-white hover:text-gray-300 transition-colors">홈</a>
                <a href="#" className="text-white hover:text-gray-300 transition-colors">소개</a>
                <a href="#" className="text-white hover:text-gray-300 transition-colors">서비스</a>
                <a href="#" className="text-white hover:text-gray-300 transition-colors">연락처</a>
              </div>
            </nav>
          </GlassBox>
        </section>

        {/* GlassBox1 - 흐르는 유리 효과 */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-white">GlassBox1 - 흐르는 유리 효과</h2>
          
          <div className="flex flex-wrap gap-4 justify-center">
            <GlassBox1>
              <span className="text-white">기본 박스</span>
            </GlassBox1>
            
            <GlassBox1 size="large" rounded>
              <div className="text-center">
                <h4 className="text-white font-semibold mb-2">흐르는 유리</h4>
                <p className="text-gray-300 text-sm">SVG 필터 효과</p>
              </div>
            </GlassBox1>
            
            <GlassBox1 size="large" inline>
              <div className="flex items-center justify-between w-full">
                <span className="text-white">플레이어</span>
                <div className="flex space-x-2">
                  <button className="w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs">▶</span>
                  </button>
                  <button className="w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs">⏸</span>
                  </button>
                </div>
              </div>
            </GlassBox1>
          </div>
        </section>
      </div>
    </div>
  );
};

export default GlassBoxDemo;