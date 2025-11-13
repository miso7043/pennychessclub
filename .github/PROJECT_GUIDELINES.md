# Penny Chess Club - 프로젝트 지침서

## 프로젝트 개요
Penny Chess Club 웹사이트는 체스 교육 및 토너먼트 정보를 제공하는 React 기반 싱글 페이지 애플리케이션입니다.

## 기술 스택

### 핵심 기술
- **프레임워크**: React 19.2.0
- **언어**: TypeScript 5.9.3
- **빌드 도구**: Vite (rolldown-vite 7.2.2)
- **라우팅**: React Router DOM
- **스타일링**: Tailwind CSS

### 개발 도구
- ESLint
- PostCSS & Autoprefixer
- TypeScript ESLint

## 프로젝트 구조

```
pennychessclub/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   │   └── Navigation.tsx
│   ├── pages/
│   │   ├── Home.tsx
│   │   ├── About.tsx
│   │   ├── Founder.tsx
│   │   ├── TeachingMethod.tsx
│   │   ├── Coaches.tsx
│   │   ├── ChessClass.tsx
│   │   ├── GroupClass.tsx
│   │   ├── Tournament.tsx
│   │   ├── RapidMeetup.tsx
│   │   ├── Shop.tsx
│   │   ├── Login.tsx
│   │   ├── Cart.tsx
│   │   ├── Contact.tsx
│   │   └── Resources.tsx
│   ├── styles/
│   │   └── mainStyle.ts
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── .github/
│   ├── PROJECT_GUIDELINES.md
│   ├── COMPONENT_TEMPLATES.md
│   ├── TAILWIND_REFERENCE.md
│   └── README.md
├── tailwind.config.js
├── postcss.config.js
├── tsconfig.json
└── package.json
```

## 사이트 구조 및 라우팅

### 메인 페이지
1. **Home** (`/`)
   - 메인 랜딩 페이지

2. **About Us** (`/about`)
   - Meet The Founder (`/founder`)
   - Our Teaching and Training Method (`/teaching-method`)
   - Our Coaches (`/coaches`)

3. **Tournament & Event** (`/tournament`)
   - PCC Monthly Rapid & Meetup (`/tournament/monthly-rapid`)
   - GVCT 9 (Nov 22nd-23rd) (`/tournament/gvct-9`)
   - 2026 BC Chess Cup (Jan 10-11) (`/tournament/bc-chess-cup-2026`)
   - BC Junior Chess Championship 2025 (`/tournament/bc-junior-championship-2025`)
   - GVCT 8 (June 7th-8th) (`/tournament/gvct-8`)
   - 2025 BC RAPID CHAMPIONSHIP (`/tournament/bc-rapid-championship-2025`)
   - PCC OPEN 4 (April 27th) (`/tournament/pcc-open-4`)
   - PCC OPEN 5 (May 25th) (`/tournament/pcc-open-5`)
   - BC OPEN 2025 (`/tournament/bc-open-2025`)
   - Greater Vancouver Chess Tournament 7 (`/tournament/gvct-7`)
   - Photo Galleries (`/tournament/photo-galleries`)

4. **Chess Class** (`/chess-class`)
   - Group Class (`/chess-class/group`)

5. **Rapid & Meetup** (`/rapid-meetup`)
   - 월간 래피드 토너먼트 및 모임 정보

6. **Shop** (`/shop`)
   - 체스 제품 판매

### 기능 페이지
- **Log In** (`/login`)
- **Cart** (`/cart`)
- **Contact** (`/contact`)
- **Resources** (`/resources`)

## 스타일링 가이드라인

### mainStyle 사용
**모든 페이지 컴포넌트는 `src/styles/mainStyle.ts`에서 정의된 스타일을 사용합니다.**

#### mainStyle Import
```tsx
import { mainStyle } from '../styles/mainStyle';
```

#### mainStyle 사용 예시
```tsx
export default function PageName() {
  return (
    <div className={mainStyle.pageContainer}>
      <h1 className={mainStyle.h1.primary}>Page Title</h1>
      
      <section className={mainStyle.section}>
        <h2 className={mainStyle.h2}>Section Title</h2>
        <p className={mainStyle.text.body}>Content</p>
      </section>
    </div>
  );
}
```

#### mainStyle 카테고리

**1. 페이지 컨테이너**
```tsx
className={mainStyle.pageContainer}  // 페이드인 애니메이션 포함
```

**2. 제목 (Headings)**
```tsx
// h1 - 색상별 변형
className={mainStyle.h1.primary}      // 파란색
className={mainStyle.h1.secondary}    // 초록색
className={mainStyle.h1.accent}       // 주황색
className={mainStyle.h1.tournament}   // 분홍색
className={mainStyle.h1.founder}      // 보라색
className={mainStyle.h1.contact}      // 청록색
className={mainStyle.h1.resources}    // 회색

// h2, h3
className={mainStyle.h2}
className={mainStyle.h3}
```

**3. 섹션 및 카드**
```tsx
className={mainStyle.section}         // 섹션 컨테이너
className={mainStyle.card}            // 카드 스타일
```

**4. 텍스트**
```tsx
className={mainStyle.text.body}       // 본문 텍스트
className={mainStyle.text.muted}      // 연한 회색 텍스트
className={mainStyle.text.small}      // 작은 텍스트
```

**5. 그리드 레이아웃**
```tsx
className={mainStyle.grid.cols1}      // 1열 그리드
className={mainStyle.grid.cols2}      // 2열 반응형 그리드
className={mainStyle.grid.cols3}      // 3열 반응형 그리드
```

**6. 리스트**
```tsx
className={mainStyle.list.default}    // 기본 리스트 컨테이너
className={mainStyle.list.item}       // 리스트 아이템
```

**7. 버튼**
```tsx
className={mainStyle.button.primary}   // 기본 버튼
className={mainStyle.button.secondary} // 보조 버튼
className={mainStyle.button.accent}    // 강조 버튼
className={mainStyle.button.disabled}  // 비활성 버튼
```

**8. 링크**
```tsx
className={mainStyle.link.primary}     // 기본 링크
className={mainStyle.link.nav}         // 네비게이션 링크
className={mainStyle.link.dropdown}    // 드롭다운 링크
```

**9. 폼 요소**
```tsx
className={mainStyle.form.label}       // 레이블
className={mainStyle.form.input}       // 입력 필드
className={mainStyle.form.textarea}    // 텍스트 영역
className={mainStyle.form.select}      // 선택 박스
```

**10. 이미지**
```tsx
className={mainStyle.image.responsive}  // 반응형 이미지
className={mainStyle.image.aspectSquare} // 정사각형 비율
className={mainStyle.image.aspectVideo}  // 16:9 비율
```

**11. 알림 메시지**
```tsx
className={mainStyle.alert.error}      // 에러 알림
className={mainStyle.alert.success}    // 성공 알림
className={mainStyle.alert.warning}    // 경고 알림
className={mainStyle.alert.info}       // 정보 알림
```

**12. 로딩 스피너**
```tsx
className={mainStyle.loading.container} // 로딩 컨테이너
className={mainStyle.loading.spinner}   // 스피너 애니메이션
```

**13. 네비게이션**
```tsx
className={mainStyle.nav.main}         // 메인 네비게이션 바
className={mainStyle.nav.container}    // 네비게이션 컨테이너
className={mainStyle.nav.menu}         // 메뉴 컨테이너
className={mainStyle.nav.item}         // 메뉴 아이템
className={mainStyle.nav.dropdown}     // 드롭다운 메뉴
```

**14. 유틸리티**
```tsx
className={mainStyle.utils.flexCenter}  // 중앙 정렬
className={mainStyle.utils.flexBetween} // 양끝 정렬
className={mainStyle.utils.textCenter}  // 텍스트 중앙 정렬
className={mainStyle.utils.shadow}      // 그림자 효과
```

#### 클래스 조합 예시
```tsx
// 여러 스타일 조합
className={`${mainStyle.card} mb-4`}
className={`${mainStyle.text.small} ${mainStyle.text.muted}`}

// 조건부 스타일
className={isActive ? mainStyle.button.primary : mainStyle.button.secondary}
```

### Tailwind CSS 사용 규칙
- mainStyle에 정의되지 않은 특수한 경우에만 Tailwind 클래스 직접 사용
- 커스텀 스타일은 mainStyle.ts에 추가하여 재사용



## 컴포넌트 작성 규칙

### 1. 파일 구조
- 각 페이지는 `src/pages/` 디렉토리에 위치
- 재사용 가능한 컴포넌트는 `src/components/` 디렉토리에 위치
- 컴포넌트 파일명은 PascalCase 사용

### 3. TypeScript 사용
- 모든 컴포넌트는 TypeScript로 작성
- Props가 있는 경우 명시적 타입 정의 필수

### 4. Import 순서
```tsx
// 1. 외부 라이브러리
import { Link } from 'react-router-dom';

// 2. 스타일
import { mainStyle } from '../styles/mainStyle';

// 3. 내부 컴포넌트
import Navigation from './components/Navigation';

// 4. 페이지 컴포넌트
import Home from './pages/Home';
```

### 5. 컴포넌트 Export
```tsx
export default function ComponentName() {
  // 컴포넌트 로직
}
```

## 네비게이션 구조

### 드롭다운 메뉴 구현
- Tailwind의 `group` 유틸리티 사용
- `:hover` 상태에서 표시
- 다단계 드롭다운: `group/sub` 사용

### 링크 패턴
- 페이지 간 이동: `<Link to="/path">`
- 같은 페이지 섹션: `<a href="#section-id">`
- 다른 페이지 섹션: `<a href="/page#section-id">`

## 애니메이션

### fadeIn 애니메이션
```css
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
```

모든 페이지 컨테이너에 `animate-fadeIn` 클래스 적용

## 반응형 디자인

### 브레이크포인트
- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px
- `2xl`: 1536px

### 반응형 패턴
```tsx
// 모바일 우선 접근
className="text-base md:text-lg lg:text-xl"
className="grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
className="p-4 md:p-6 lg:p-8"
```

## 개발 명령어

```bash
# 개발 서버 실행
npm run dev

# 프로덕션 빌드
npm run build

# 린트 검사
npm run lint

# 프리뷰 서버
npm run preview
```

## 코드 스타일 가이드

### 1. 들여쓰기
- 2 스페이스 사용

### 2. 따옴표
- JSX 속성: 큰따옴표 (`"`)
- JavaScript: 작은따옴표 (`'`)

### 3. 세미콜론
- 사용하지 않음 (ESLint 설정에 따름)

### 4. 네이밍 컨벤션
- 컴포넌트: PascalCase
- 함수/변수: camelCase
- 상수: UPPER_SNAKE_CASE
- CSS 클래스: kebab-case (Tailwind)

## Git 커밋 메시지 규칙

```
feat: 새로운 기능 추가
fix: 버그 수정
style: 스타일 변경 (코드 포맷팅, 세미콜론 누락 등)
refactor: 코드 리팩토링
docs: 문서 수정
chore: 빌드 프로세스 또는 보조 도구 변경
```

## 주의사항

### 금지 사항
- ❌ 인라인 스타일 사용 금지
- ❌ 별도 CSS 파일 생성 금지
- ❌ styled-components 사용 금지
- ❌ 클래스 컴포넌트 사용 금지 (함수형 컴포넌트만 사용)

### 권장 사항
- ✅ 모든 스타일은 Tailwind 유틸리티 클래스 사용
- ✅ 컴포넌트는 작고 재사용 가능하게 작성
- ✅ Props 타입은 명시적으로 정의
- ✅ 시맨틱 HTML 태그 사용
- ✅ 접근성 고려 (ARIA 속성 등)

## 성능 최적화

### 이미지 최적화
- WebP 포맷 우선 사용
- 적절한 크기로 리사이징
- Lazy loading 적용

### 코드 스플리팅
```tsx
import { lazy, Suspense } from 'react';

const LazyComponent = lazy(() => import('./Component'));

<Suspense fallback={<div>Loading...</div>}>
  <LazyComponent />
</Suspense>
```

## 배포

### 빌드 전 체크리스트
- [ ] 모든 린트 오류 해결
- [ ] TypeScript 컴파일 오류 없음
- [ ] 모든 페이지 라우팅 테스트
- [ ] 반응형 디자인 확인
- [ ] 브라우저 호환성 테스트

## 문의 및 연락처

- **Email**: pennychessclub@gmail.com
- **Founder**: WIM Penny Pham

---

**최종 업데이트**: 2025년 11월 12일
**버전**: 1.1.0 - mainStyle 중앙 집중식 스타일 관리 시스템 추가
