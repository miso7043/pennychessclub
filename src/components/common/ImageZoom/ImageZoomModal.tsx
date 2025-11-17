import React from 'react';
import { createPortal } from 'react-dom';

/**
  * React Portal을 사용하여 모달을 document.body에 직접 렌더링
  * 
  * createPortal의 장점:
  * 1. DOM 계층 구조 탈출: 부모 컴포넌트의 CSS 제약(overflow, z-index, position 등)에서 벗어남
  * 2. 전체 화면 덮기: 부모 컨테이너의 크기 제한 없이 viewport 전체를 덮을 수 있음
  * 3. 스타일 격리: 부모의 CSS 상속이나 제약 없이 독립적인 스타일 적용 가능
  * 4. 이벤트 버블링 유지: React 이벤트 시스템은 여전히 컴포넌트 트리를 따라 작동
  * 5. 렌더링 안정성: 브라우저 최적화나 CSS 엔진의 간섭 없이 안정적인 위치 고정
  * 
  * createPortal의 단점:
  * 1. 메모리 누수 위험: DOM 노드가 제거되지 않으면 메모리 누수 발생 가능
  * 2. 스타일 상속 차단: 부모로부터의 유용한 CSS 상속도 함께 차단됨
  * 3. 접근성 문제: DOM 구조와 React 트리 불일치로 스크린 리더 등에서 혼란 야기
  * 4. 테스팅 복잡성: 컴포넌트 트리 외부 렌더링으로 테스트 작성이 복잡해짐
  * 5. 디버깅 어려움: React DevTools에서 Portal 내부 구조 추적이 어려움
  * 6. SEO 영향: 서버 사이드 렌더링 시 hydration 불일치 발생 가능
  * 7. 이벤트 위임 제한: 일부 전역 이벤트 리스너가 Portal 내부에서 동작하지 않을 수 있음
  * 8. 성능 오버헤드: 추가적인 DOM 조작과 이벤트 처리로 미세한 성능 저하
  * 
  * 사용법: createPortal(렌더링할_JSX, 대상_DOM_노드)
  * - 첫 번째 인자: 렌더링할 React 컴포넌트/JSX
  * - 두 번째 인자: 실제로 렌더링될 DOM 위치 (여기서는 document.body)
  * 
  * 모달, 툴팁, 드롭다운 등 레이어 위에 떠야 하는 UI에 필수적
  * 
  * 메모리 누수 방지:
  * - React Portal 자체: React가 컴포넌트 언마운트 시 자동으로 DOM 노드 제거
  * - 수동 설정 항목들은 직접 정리 필요:
  *   1. document.body 스타일 변경 → cleanup에서 원복
  *   2. 전역 이벤트 리스너 → removeEventListener로 제거
  *   3. 타이머나 인터벌 → clearTimeout/clearInterval로 제거
  *   4. 외부 라이브러리 인스턴스 → destroy 메서드 호출
  */

// 애니메이션 시간 상수
const FADE_OUT_DURATION = 350; // ms
const FADE_OUT_BUFFER = 20; // ms (여유)
const FADE_IN_BG_DURATION = 320; // ms
const FADE_IN_IMG_DURATION = 350; // ms

interface ImageZoomModalProps {
  src: string;
  alt?: string;
  open: boolean;
  onClose: () => void;
}



const ImageZoomModal: React.FC<ImageZoomModalProps> = ({ src, alt, open, onClose }) => {
  // 애니메이션 단계 관리
  const [backgroundVisible, setBackgroundVisible] = React.useState(false);
  const [imageVisible, setImageVisible] = React.useState(false);
  const [isFadingOut, setIsFadingOut] = React.useState(false);

  // 빠른 fade out 애니메이션 후 onClose 실행
  const onFadeOutAni = React.useCallback(() => {
    setIsFadingOut(true);
    setBackgroundVisible(false);
    setImageVisible(false);
    setTimeout(() => {
      setIsFadingOut(false);
      onClose();
    }, FADE_OUT_DURATION + FADE_OUT_BUFFER);
  }, [onClose]);

  // 스크롤 방지 및 메모리 정리
  React.useEffect(() => {
    if (open) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';

      // ESC 키로 모달 닫기
      const handleEscape = (event: KeyboardEvent) => {
        if (event.key === 'Escape') {
          onFadeOutAni();
        }
      };
      document.addEventListener('keydown', handleEscape);

      // 애니메이션 단계 초기화 및 순차적 실행
      setBackgroundVisible(false);
      setImageVisible(false);
      setIsFadingOut(false);
      const bgTimer = setTimeout(() => {
        setBackgroundVisible(true);
        setTimeout(() => setImageVisible(true), 200);
      }, 10);

      return () => {
        document.body.style.overflow = originalOverflow;
        document.removeEventListener('keydown', handleEscape);
        clearTimeout(bgTimer);
      };
    } else {
      setBackgroundVisible(false);
      setImageVisible(false);
      setIsFadingOut(false);
    }
  }, [open, onFadeOutAni]);

  if (!open) return null;

  // 모달 내용 정의 (애니메이션 적용)
  const modalContent = (
    <div
      className="fixed inset-0"
      onClick={onFadeOutAni}
      style={{
        zIndex: 1002,
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 0,
        padding: '0',
        background: 'rgba(0,0,0,.9)',
        transition: isFadingOut
          ? `opacity ${FADE_OUT_DURATION}ms cubic-bezier(.4,0,.2,1), transform ${FADE_OUT_DURATION}ms cubic-bezier(.4,0,.2,1)`
          : `opacity ${FADE_IN_BG_DURATION}ms cubic-bezier(.4,0,.2,1), transform ${FADE_IN_IMG_DURATION}ms cubic-bezier(.4,0,.2,1)`,
        opacity: backgroundVisible ? 1 : 0,
        transform: backgroundVisible ? 'translateY(0)' : 'translateY(40px)'
      }}
    >
      <div
        className="relative"
        onClick={e => e.stopPropagation()}
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <button
          className="absolute top-4 right-4 z-10 text-white text-3xl font-bold bg-black bg-opacity-80 rounded-full w-12 h-12 flex items-center justify-center hover:bg-opacity-100"
          onClick={onFadeOutAni}
          aria-label="Close"
          style={{
            zIndex: 1003
          }}
        >
          ×
        </button>
        <img
          src={src}
          alt={alt}
          className="object-contain rounded-lg shadow-2xl"
          style={{
            maxHeight: '90vh',
            maxWidth: '90vw',
            display: 'block',
            opacity: imageVisible ? 1 : 0,
            transition: isFadingOut
              ? `opacity ${FADE_OUT_DURATION}ms cubic-bezier(.4,0,.2,1)`
              : `opacity ${FADE_IN_IMG_DURATION}ms cubic-bezier(.4,0,.2,1)`
          }}
        />
      </div>
    </div>
  );

  return createPortal(modalContent, document.body);
};

export default ImageZoomModal;
