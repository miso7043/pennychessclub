// 모바일 환경 감지 커스텀 훅
import { useState, useEffect } from "react";
export function useMobile(breakpoint: number = 768): boolean {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= breakpoint);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, [breakpoint]);
  return isMobile;
}
// 모바일 여부에 따라 랜덤 배경 이미지 경로 반환
export function getRandomBgPath(isMobile: boolean): string {
  const randomNum = Math.floor(Math.random() * 5) + 1;
  if (isMobile) {
    return `/imgs/bg/ver-back-${randomNum}.webp`;
  }
  return `/imgs/bg/back-${randomNum}.webp`;
}
import React from "react";


// 문자열 내 **볼드** 부분을 <strong>으로 변환하는 함수
export const renderBoldText = (text: string) => {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return (
    <>
      {parts.map((part: string, i: number) =>
        /^\*\*[^*]+\*\*$/.test(part)
          ? <strong key={i} className="font-bold">{part.slice(2, -2)}</strong>
          : <React.Fragment key={i}>{part}</React.Fragment>
      )}
    </>
  );
};

// 문자열 내 \n을 줄바꿈(<br />)으로 변환하는 함수
// {renderNewlineText(text)}
export const renderNewlineText = (text: string) => {
  const lines = text.split(/\n/g);
  return (
    <>
      {lines.map((line, idx) => (
        <React.Fragment key={idx}>
          {line}
          {idx < lines.length - 1 && <br />}
        </React.Fragment>
      ))}
    </>
  );
};
