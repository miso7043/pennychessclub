# Tailwind CSS 빠른 참조 가이드

## 프로젝트 커스텀 색상

```javascript
primary: '#4a90e2'      // 파란색 - 네비게이션, 메인 브랜드
secondary: '#7cb342'    // 녹색 - Home 페이지
accent: '#ff9800'       // 주황색 - Chess Class 페이지
tournament: '#e91e63'   // 분홍색 - Tournament 페이지
founder: '#9c27b0'      // 보라색 - Founder 페이지
contact: '#00bcd4'      // 청록색 - Contact 페이지
resources: '#607d8b'    // 회색-파란색 - Resources 페이지
```

### 사용 예시
```tsx
className="text-primary"
className="bg-secondary"
className="border-accent"
className="hover:bg-tournament"
```

## 자주 사용하는 Tailwind 패턴

### 레이아웃

#### 컨테이너
```tsx
className="max-w-7xl mx-auto px-8"        // 중앙 정렬 컨테이너
className="min-h-screen"                  // 전체 화면 높이
className="flex flex-col"                 // 세로 플렉스박스
className="flex items-center justify-between"  // 양 끝 정렬
```

#### 그리드
```tsx
className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
className="grid grid-cols-1 gap-6"
```

#### 플렉스박스
```tsx
className="flex"                          // 기본 플렉스
className="flex flex-col"                 // 세로 플렉스
className="flex items-center"             // 세로 중앙 정렬
className="flex justify-center"           // 가로 중앙 정렬
className="flex gap-4"                    // 간격 추가
```

### 간격 (Spacing)

#### 마진
```tsx
className="m-0"          // 모든 방향 0
className="mx-auto"      // 좌우 auto (중앙 정렬)
className="mt-4"         // 위 1rem
className="mb-8"         // 아래 2rem
className="my-6"         // 위아래 1.5rem
```

#### 패딩
```tsx
className="p-4"          // 모든 방향 1rem
className="px-8"         // 좌우 2rem
className="py-3"         // 위아래 0.75rem
className="p-6"          // 모든 방향 1.5rem
```

### 타이포그래피

#### 폰트 크기
```tsx
className="text-4xl"     // 제목 (2.25rem)
className="text-3xl"     // 부제목 (1.875rem)
className="text-xl"      // 큰 텍스트 (1.25rem)
className="text-base"    // 기본 텍스트 (1rem)
className="text-sm"      // 작은 텍스트 (0.875rem)
```

#### 폰트 굵기
```tsx
className="font-bold"     // 700
className="font-semibold" // 600
className="font-medium"   // 500
className="font-normal"   // 400
```

#### 텍스트 색상
```tsx
className="text-white"
className="text-gray-900"
className="text-gray-800"
className="text-gray-700"
className="text-gray-600"
```

#### 텍스트 정렬
```tsx
className="text-left"
className="text-center"
className="text-right"
```

#### 줄 높이
```tsx
className="leading-relaxed"  // 1.625
className="leading-normal"   // 1.5
className="leading-tight"    // 1.25
```

### 배경색

```tsx
className="bg-white"
className="bg-gray-50"       // 매우 연한 회색
className="bg-gray-100"      // 연한 회색
className="bg-primary"
className="bg-transparent"
```

### 테두리

#### 테두리 스타일
```tsx
className="border"                    // 1px 테두리
className="border-2"                  // 2px 테두리
className="border-gray-300"           // 회색 테두리
className="rounded"                   // 둥근 모서리
className="rounded-lg"                // 큰 둥근 모서리
className="rounded-full"              // 완전히 둥근 모서리
```

### 그림자

```tsx
className="shadow-sm"        // 작은 그림자
className="shadow"           // 기본 그림자
className="shadow-md"        // 중간 그림자
className="shadow-lg"        // 큰 그림자
```

### 전환 효과 (Transitions)

```tsx
className="transition-colors"           // 색상 전환
className="transition-all"             // 모든 속성 전환
className="duration-300"               // 300ms 지속
className="ease-in"                    // ease-in 타이밍
```

### 호버 효과

```tsx
className="hover:bg-gray-100"
className="hover:bg-white/10"          // 투명도 포함
className="hover:text-primary"
className="hover:shadow-lg"
```

### 포커스 효과

```tsx
className="focus:outline-none"
className="focus:ring-2"
className="focus:ring-primary"
```

### 표시/숨김

```tsx
className="hidden"                     // 숨김
className="block"                      // 블록 표시
className="inline-block"               // 인라인 블록 표시
className="hidden md:block"            // 모바일에서는 숨김, 데스크톱에서 표시
```

### 위치 (Position)

```tsx
className="relative"
className="absolute"
className="sticky"
className="top-0"
className="left-0"
className="right-0"
className="bottom-0"
```

### Z-Index

```tsx
className="z-10"
className="z-50"
className="z-[1000]"     // 커스텀 값
```

### 리스트

```tsx
className="list-none"              // 마커 없음
className="list-disc"              // 점 마커
className="list-inside"            // 내부 마커
className="list-decimal"           // 숫자 마커
```

### 오버플로우

```tsx
className="overflow-hidden"
className="overflow-auto"
className="overflow-x-auto"
className="overflow-y-auto"
```

## 반응형 디자인 패턴

### 브레이크포인트
- `sm:` - 640px 이상
- `md:` - 768px 이상
- `lg:` - 1024px 이상
- `xl:` - 1280px 이상
- `2xl:` - 1536px 이상

### 반응형 예시

#### 그리드 열 변경
```tsx
className="grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
```

#### 텍스트 크기 변경
```tsx
className="text-2xl md:text-3xl lg:text-4xl"
```

#### 패딩 변경
```tsx
className="p-4 md:p-6 lg:p-8"
```

#### 표시/숨김
```tsx
className="hidden lg:block"          // 큰 화면에서만 표시
className="block lg:hidden"          // 작은 화면에서만 표시
```

#### 플렉스 방향 변경
```tsx
className="flex-col lg:flex-row"
```

## 그룹 호버 패턴

### 기본 그룹 호버
```tsx
<div className="group">
  <div className="hidden group-hover:block">
    드롭다운 내용
  </div>
</div>
```

### 중첩 그룹 호버
```tsx
<div className="group">
  <div className="group-hover:block">
    <div className="group/sub">
      <div className="hidden group-hover/sub:block">
        서브 드롭다운 내용
      </div>
    </div>
  </div>
</div>
```

## 커스텀 애니메이션

### fadeIn 애니메이션
```tsx
className="animate-fadeIn"
```

index.css에 정의된 커스텀 애니메이션:
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

## 유용한 유틸리티 조합

### 카드 스타일
```tsx
className="bg-white p-4 rounded shadow-sm"
```

### 섹션 스타일
```tsx
className="mb-12 p-6 bg-gray-50 rounded-lg"
```

### 버튼 스타일
```tsx
className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-blue-600 transition-colors"
```

### 링크 스타일
```tsx
className="text-gray-800 no-underline px-4 py-2 block hover:bg-gray-100 transition-colors"
```

### 입력 필드 스타일
```tsx
className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
```

### 중앙 정렬 컨테이너
```tsx
className="max-w-7xl mx-auto p-8"
```

### 전체 높이 컨테이너
```tsx
className="min-h-screen flex flex-col"
```

## 디버깅 팁

### 경계선 추가 (개발 시)
```tsx
className="border border-red-500"    // 빨간 테두리로 확인
className="bg-red-100"               // 배경색으로 확인
```

### 공백 확인
```tsx
className="outline outline-2 outline-blue-500"
```

## 주의사항

1. **클래스 순서**: 기능별로 그룹화 (레이아웃 > 간격 > 타이포그래피 > 색상 > 효과)
2. **반응형 우선순위**: 모바일 먼저, 그 다음 큰 화면
3. **!important 사용 금지**: Tailwind에서는 `!` 접두사 사용 가능하지만 피하는 것이 좋음
4. **임의 값**: `className="w-[372px]"` 형식으로 커스텀 값 사용 가능

---

**참고**: 더 많은 유틸리티는 [Tailwind CSS 공식 문서](https://tailwindcss.com/docs) 참조
