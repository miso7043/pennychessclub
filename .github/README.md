# Penny Chess Club - 개발 가이드

## 📚 문서 목록

이 프로젝트의 모든 개발 가이드라인과 참조 문서입니다.

### 1. [PROJECT_GUIDELINES.md](./PROJECT_GUIDELINES.md)
**프로젝트 전체 지침서**
- 프로젝트 개요 및 기술 스택
- 사이트 구조 및 라우팅
- 스타일링 가이드라인
- 컴포넌트 작성 규칙
- 코드 스타일 가이드
- 성능 최적화 및 배포 체크리스트

### 2. [COMPONENT_TEMPLATES.md](./COMPONENT_TEMPLATES.md)
**재사용 가능한 컴포넌트 템플릿**
- 페이지 컴포넌트 템플릿
- 재사용 가능한 UI 컴포넌트
- 네비게이션 메뉴 패턴
- 폼 컴포넌트
- 레이아웃 템플릿
- 상태 표시 컴포넌트

### 3. [TAILWIND_REFERENCE.md](./TAILWIND_REFERENCE.md)
**Tailwind CSS 빠른 참조**
- 프로젝트 커스텀 색상
- 자주 사용하는 패턴
- 반응형 디자인 패턴
- 그룹 호버 패턴
- 유용한 유틸리티 조합

## 🚀 빠른 시작

### 새로운 페이지 만들기
1. `src/pages/` 폴더에 새 파일 생성
2. [COMPONENT_TEMPLATES.md](./COMPONENT_TEMPLATES.md)에서 적절한 템플릿 복사
3. `src/App.tsx`에 라우트 추가
4. 필요시 네비게이션 메뉴에 추가

### 새로운 컴포넌트 만들기
1. `src/components/` 폴더에 새 파일 생성
2. [COMPONENT_TEMPLATES.md](./COMPONENT_TEMPLATES.md)에서 적절한 템플릿 참조
3. TypeScript 타입 정의
4. Tailwind 클래스만 사용하여 스타일링

### 스타일 적용하기
1. [TAILWIND_REFERENCE.md](./TAILWIND_REFERENCE.md)에서 필요한 클래스 찾기
2. 반응형 디자인 패턴 적용
3. 프로젝트 커스텀 색상 사용

## 📝 개발 워크플로우

### 1. 작업 전
- [ ] 최신 코드 pull
- [ ] 개발 서버 실행: `npm run dev`
- [ ] 관련 문서 확인

### 2. 개발 중
- [ ] [PROJECT_GUIDELINES.md](./PROJECT_GUIDELINES.md) 규칙 준수
- [ ] Tailwind CSS만 사용 (별도 CSS 파일 ❌)
- [ ] TypeScript 타입 정의
- [ ] 반응형 디자인 적용

### 3. 작업 후
- [ ] 린트 검사: `npm run lint`
- [ ] 빌드 테스트: `npm run build`
- [ ] 모든 브레이크포인트에서 테스트
- [ ] 커밋 메시지 규칙 준수

## 🎨 디자인 시스템

### 색상 팔레트
```
Primary (네비게이션):     #4a90e2 (파란색)
Secondary (Home):         #7cb342 (녹색)
Accent (Chess Class):     #ff9800 (주황색)
Tournament:               #e91e63 (분홍색)
Founder:                  #9c27b0 (보라색)
Contact:                  #00bcd4 (청록색)
Resources:                #607d8b (회색-파란색)
```

### 타이포그래피
```
H1: text-4xl (2.25rem)
H2: text-3xl (1.875rem)
H3: text-xl (1.25rem)
Body: text-base (1rem)
```

### 간격 시스템
```
Section 간격: mb-12 (3rem)
카드 간격: gap-4 (1rem)
패딩: p-6 (1.5rem)
```

## 🔧 유용한 명령어

```bash
# 개발 서버 실행
npm run dev

# 프로덕션 빌드
npm run build

# 린트 검사
npm run lint

# 프리뷰 서버
npm run preview

# TypeScript 타입 체크
npx tsc --noEmit
```

## 📂 프로젝트 구조

```
pennychessclub/
├── .github/
│   ├── README.md                    # 이 파일
│   ├── PROJECT_GUIDELINES.md        # 프로젝트 지침서
│   ├── COMPONENT_TEMPLATES.md       # 컴포넌트 템플릿
│   └── TAILWIND_REFERENCE.md        # Tailwind 참조
├── src/
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
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── tailwind.config.js
├── postcss.config.js
└── package.json
```

## 🎯 핵심 원칙

### ✅ 해야 할 것
- Tailwind CSS 유틸리티 클래스 사용
- TypeScript 타입 정의
- 반응형 디자인 적용
- 컴포넌트 재사용
- 시맨틱 HTML 사용

### ❌ 하지 말아야 할 것
- 인라인 스타일 작성
- 별도 CSS 파일 생성
- 클래스 컴포넌트 사용
- 타입 정의 생략
- 접근성 무시

## 🆘 문제 해결

### Tailwind 클래스가 작동하지 않을 때
1. `tailwind.config.js`의 `content` 경로 확인
2. 개발 서버 재시작
3. 브라우저 캐시 삭제

### TypeScript 오류
1. `npm install` 실행하여 의존성 확인
2. `npx tsc --noEmit`로 타입 체크
3. VSCode 재시작

### 빌드 오류
1. `npm run lint`로 린트 오류 확인
2. `node_modules` 삭제 후 재설치
3. `.vite` 캐시 폴더 삭제

## 📞 문의

프로젝트 관련 문의: pennychessclub@gmail.com

---

**마지막 업데이트**: 2025년 11월 12일
**버전**: 1.0.0
