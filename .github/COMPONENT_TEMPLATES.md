# 컴포넌트 템플릿 가이드

## 페이지 컴포넌트 템플릿

### 기본 페이지 템플릿
```tsx
import { mainStyle } from '../styles/mainStyle';

export default function PageName() {
  return (
    <div className={mainStyle.pageContainer}>
      <h1 className={mainStyle.h1.primary}>Page Title</h1>
      
      <section id="section-name" className={mainStyle.section}>
        <h2 className={mainStyle.h2}>Section Title</h2>
        <p className={mainStyle.text.body}>Content goes here</p>
      </section>
    </div>
  );
}
```

### 리스트가 있는 페이지 템플릿
```tsx
import { mainStyle } from '../styles/mainStyle';

export default function PageWithList() {
  return (
    <div className={mainStyle.pageContainer}>
      <h1 className={mainStyle.h1.accent}>Page Title</h1>
      
      <section id="list-section" className={mainStyle.section}>
        <h2 className={mainStyle.h2}>List Section</h2>
        <ul className={mainStyle.list.default}>
          <li className={mainStyle.list.item}>List item 1</li>
          <li className={mainStyle.list.item}>List item 2</li>
          <li className={mainStyle.list.item}>List item 3</li>
        </ul>
      </section>
    </div>
  );
}
```

### 카드 그리드가 있는 페이지 템플릿
```tsx
import { mainStyle } from '../styles/mainStyle';

export default function PageWithCards() {
  return (
    <div className={mainStyle.pageContainer}>
      <h1 className={mainStyle.h1.tournament}>Page Title</h1>
      
      <section id="cards-section" className={mainStyle.section}>
        <h2 className={mainStyle.h2}>Cards Section</h2>
        <div className={mainStyle.grid.cols3}>
          <div className={mainStyle.card}>
            <h3 className={mainStyle.h3}>Card Title 1</h3>
            <p className={mainStyle.text.muted}>Card content</p>
          </div>
          <div className={mainStyle.card}>
            <h3 className={mainStyle.h3}>Card Title 2</h3>
            <p className={mainStyle.text.muted}>Card content</p>
          </div>
          <div className={mainStyle.card}>
            <h3 className={mainStyle.h3}>Card Title 3</h3>
            <p className={mainStyle.text.muted}>Card content</p>
          </div>
        </div>
      </section>
    </div>
  );
}
```

## 재사용 가능한 컴포넌트 템플릿

### 카드 컴포넌트
```tsx
import { mainStyle } from '../styles/mainStyle';

interface CardProps {
  title: string;
  content: string;
  className?: string;
}

export default function Card({ title, content, className = '' }: CardProps) {
  return (
    <div className={`${mainStyle.card} ${className}`}>
      <h3 className={mainStyle.h3}>{title}</h3>
      <p className={mainStyle.text.muted}>{content}</p>
    </div>
  );
}
```

### 섹션 컴포넌트
```tsx
import { mainStyle } from '../styles/mainStyle';

interface SectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
  className?: string;
}

export default function Section({ id, title, children, className = '' }: SectionProps) {
  return (
    <section id={id} className={`${mainStyle.section} ${className}`}>
      <h2 className={mainStyle.h2}>{title}</h2>
      {children}
    </section>
  );
}
```

### 버튼 컴포넌트
```tsx
import { mainStyle } from '../styles/mainStyle';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'accent';
  className?: string;
}

export default function Button({ 
  children, 
  onClick, 
  variant = 'primary',
  className = '' 
}: ButtonProps) {
  const variants = {
    primary: mainStyle.button.primary,
    secondary: mainStyle.button.secondary,
    accent: mainStyle.button.accent
  };

  return (
    <button
      onClick={onClick}
      className={`${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
}
```

### 링크 버튼 컴포넌트
```tsx
import { Link } from 'react-router-dom';
import { mainStyle } from '../styles/mainStyle';

interface LinkButtonProps {
  to: string;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'accent';
  className?: string;
}

export default function LinkButton({ 
  to, 
  children, 
  variant = 'primary',
  className = '' 
}: LinkButtonProps) {
  const variants = {
    primary: mainStyle.button.primary,
    secondary: mainStyle.button.secondary,
    accent: mainStyle.button.accent
  };

  return (
    <Link
      to={to}
      className={`inline-block no-underline ${variants[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}
```

## 네비게이션 메뉴 아이템 템플릿

### 현재 메뉴 구조
```
- Home (드롭다운 없음)
- About Us
  |- Meet The Founder
  |- Our Teaching and Training Method
  |- Our Coaches
- Tournament & Event
  |- PCC Monthly Rapid & Meetup
  |- GVCT 9 (Nov 22nd-23rd)
  |- 2026 BC Chess Cup (Jan 10-11)
  |- BC Junior Chess Championship 2025
  |- GVCT 8 (June 7th-8th)
  |- 2025 BC RAPID CHAMPIONSHIP
  |- PCC OPEN 4 (April 27th)
  |- PCC OPEN 5 (May 25th)
  |- BC OPEN 2025
  |- Greater Vancouver Chess Tournament 7
  |- Photo Galleries
- Chess Class
  |- Group Class
- Rapid & Meetup (드롭다운 없음)
- Shop (드롭다운 없음)
- Log In (우측 액션)
- Cart (우측 액션)
```

### 드롭다운 없는 메뉴 아이템
```tsx
<li className="relative group">
  <Link to="/path" className={mainStyle.link.nav}>
    Menu Item
  </Link>
</li>
```

### 단일 레벨 드롭다운 메뉴 아이템
```tsx
<li className="relative group">
  <Link to="/path" className={mainStyle.link.nav}>
    Menu Item
  </Link>
  <ul className={mainStyle.nav.dropdown}>
    <li><Link to="/path/sub1" className={mainStyle.link.dropdown}>Submenu 1</Link></li>
    <li><Link to="/path/sub2" className={mainStyle.link.dropdown}>Submenu 2</Link></li>
  </ul>
</li>
```

### 우측 액션 버튼 (Log In, Cart)
```tsx
{/* Right side actions */}
<div className="flex items-center gap-4">
  <Link to="/login" className={mainStyle.link.nav}>
    Log In
  </Link>
  <Link to="/cart" className={`${mainStyle.link.nav} flex items-center gap-2`}>
    <span>Cart</span>
    <span className="bg-white text-primary rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">0</span>
  </Link>
</div>
```

## 폼 컴포넌트 템플릿

### 기본 입력 필드
```tsx
import { mainStyle } from '../styles/mainStyle';

<div className="mb-4">
  <label htmlFor="input-id" className={mainStyle.form.label}>
    Label
  </label>
  <input
    id="input-id"
    type="text"
    className={mainStyle.form.input}
    placeholder="Enter text..."
  />
</div>
```

### 텍스트 영역
```tsx
import { mainStyle } from '../styles/mainStyle';

<div className="mb-4">
  <label htmlFor="textarea-id" className={mainStyle.form.label}>
    Label
  </label>
  <textarea
    id="textarea-id"
    rows={4}
    className={mainStyle.form.textarea}
    placeholder="Enter text..."
  />
</div>
```

### 선택 필드
```tsx
import { mainStyle } from '../styles/mainStyle';

<div className="mb-4">
  <label htmlFor="select-id" className={mainStyle.form.label}>
    Label
  </label>
  <select
    id="select-id"
    className={mainStyle.form.select}
  >
    <option value="">Select an option</option>
    <option value="1">Option 1</option>
    <option value="2">Option 2</option>
  </select>
</div>
```

## 레이아웃 템플릿

### 2단 레이아웃
```tsx
<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
  <div className="bg-gray-50 p-6 rounded-lg">
    {/* Left column content */}
  </div>
  <div className="bg-gray-50 p-6 rounded-lg">
    {/* Right column content */}
  </div>
</div>
```

### 3단 레이아웃
```tsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  <div className="bg-gray-50 p-6 rounded-lg">
    {/* Column 1 */}
  </div>
  <div className="bg-gray-50 p-6 rounded-lg">
    {/* Column 2 */}
  </div>
  <div className="bg-gray-50 p-6 rounded-lg">
    {/* Column 3 */}
  </div>
</div>
```

### 사이드바 레이아웃
```tsx
<div className="flex flex-col lg:flex-row gap-8">
  <aside className="lg:w-64 bg-gray-50 p-6 rounded-lg">
    {/* Sidebar content */}
  </aside>
  <main className="flex-1">
    {/* Main content */}
  </main>
</div>
```

## 반응형 이미지 템플릿

```tsx
<div className="relative w-full aspect-video overflow-hidden rounded-lg">
  <img
    src="/path/to/image.jpg"
    alt="Description"
    className="w-full h-full object-cover"
    loading="lazy"
  />
</div>
```

## 로딩 상태 템플릿

```tsx
<div className="flex items-center justify-center min-h-[200px]">
  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
</div>
```

## 에러 상태 템플릿

```tsx
<div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
  <p className="font-medium">Error</p>
  <p className="text-sm">Error message goes here</p>
</div>
```

## 성공 메시지 템플릿

```tsx
<div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg">
  <p className="font-medium">Success</p>
  <p className="text-sm">Success message goes here</p>
</div>
```

---

**사용 방법**: 새로운 컴포넌트를 만들 때 위의 템플릿을 참고하여 일관된 스타일을 유지하세요.
