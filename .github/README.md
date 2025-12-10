## Penny Chess Club - Development Guide
## This project is the second volunteer project in Canada.

## 📚 Document List

This is the comprehensive list of all development guidelines and reference documents for this project.

### 1\. [PROJECT\_GUIDELINES.md](https://www.google.com/search?q=./PROJECT_GUIDELINES.md)

**Overall Project Handbook**

  - Project Overview and Tech Stack
  - Site Structure and Routing
  - Styling Guidelines
  - Component Creation Rules
  - Code Style Guide
  - Performance Optimization and Deployment Checklist

### 2\. [COMPONENT\_TEMPLATES.md](https://www.google.com/search?q=./COMPONENT_TEMPLATES.md)

**Reusable Component Templates**

  - Page Component Template
  - Reusable UI Components
  - Navigation Menu Patterns
  - Form Components
  - Layout Templates
  - Status Indicator Components

### 3\. [TAILWIND\_REFERENCE.md](https://www.google.com/search?q=./TAILWIND_REFERENCE.md)

**Tailwind CSS Quick Reference**

  - Project Custom Colors
  - Frequently Used Patterns
  - Responsive Design Patterns
  - Group Hover Patterns
  - Useful Utility Combinations

## 🚀 Quick Start

### Creating a New Page

1.  Create a new file in the `src/pages/` folder
2.  Copy the appropriate template from [COMPONENT\_TEMPLATES.md](https://www.google.com/search?q=./COMPONENT_TEMPLATES.md)
3.  Add the route to `src/App.tsx`
4.  Add to the navigation menu, if necessary

### Creating a New Component

1.  Create a new file in the `src/components/` folder
2.  Refer to the appropriate template in [COMPONENT\_TEMPLATES.md](https://www.google.com/search?q=./COMPONENT_TEMPLATES.md)
3.  Define TypeScript types
4.  Style using Tailwind classes only

### Applying Styles

1.  Find the necessary classes in [TAILWIND\_REFERENCE.md](https://www.google.com/search?q=./TAILWIND_REFERENCE.md)
2.  Apply responsive design patterns
3.  Use project custom colors

## 📝 Development Workflow

### 1\. Before Work

  - [ ] Pull the latest code
  - [ ] Run the development server: `npm run dev`
  - [ ] Review relevant documentation

### 2\. During Development

  - [ ] Adhere to the rules in [PROJECT\_GUIDELINES.md](https://www.google.com/search?q=./PROJECT_GUIDELINES.md)
  - [ ] Use Tailwind CSS only (No separate CSS files ❌)
  - [ ] Define TypeScript types
  - [ ] Apply responsive design

### 3\. After Work

  - [ ] Run lint check: `npm run lint`
  - [ ] Run build test: `npm run build`
  - [ ] Test on all breakpoints
  - [ ] Follow commit message rules

## 🎨 Design System

### Color Palette

```
Primary (Navigation): #4a90e2 (Blue)
Secondary (Home): #7cb342 (Green)
Accent (Chess Class): #ff9800 (Orange)
Tournament: #e91e63 (Pink)
Founder: #9c27b0 (Purple)
Contact: #00bcd4 (Cyan)
Resources: #607d8b (Blue-Gray)
```

### Typography

```
H1: text-4xl (2.25rem)
H2: text-3xl (1.875rem)
H3: text-xl (1.25rem)
Body: text-base (1rem)
```

### Spacing System

```
Section Spacing: mb-12 (3rem)
Card Spacing: gap-4 (1rem)
Padding: p-6 (1.5rem)
```

## 🔧 Useful Commands

```bash
# Run development server
npm run dev

# Production build
npm run build

# Run lint check
npm run lint

# Preview server
npm run preview

# TypeScript type checking
npx tsc --noEmit
```

## 📂 Project Structure

```
pennychessclub/
├── .github/
│   ├── README.md                 # This file
│   ├── PROJECT_GUIDELINES.md     # Project Guidelines
│   ├── COMPONENT_TEMPLATES.md    # Component Templates
│   └── TAILWIND_REFERENCE.md     # Tailwind Reference
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

## 🎯 Core Principles

### ✅ Do's

  - Use Tailwind CSS utility classes
  - Define TypeScript types
  - Apply responsive design
  - Promote component reuse
  - Use semantic HTML

### ❌ Don'ts

  - Write inline styles
  - Create separate CSS files
  - Use class components
  - Omit type definitions
  - Ignore accessibility

## 🆘 Troubleshooting

### Tailwind Classes Not Working

1.  Check the `content` path in `tailwind.config.js`
2.  Restart the development server
3.  Clear browser cache

### TypeScript Errors

1.  Run `npm install` to confirm dependencies
2.  Run `npx tsc --noEmit` for type checking
3.  Restart VSCode

### Build Errors

1.  Run `npm run lint` to check for linting errors
2.  Delete `node_modules` and reinstall
3.  Delete the `.vite` cache folder

## 📞 Contact

Project related inquiries: thyoon7043@gmail.com

-----

**Last Updated**: November 12, 2025
**Version**: 1.0.0
