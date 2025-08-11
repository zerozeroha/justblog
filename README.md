# React 기반 Todo List 프로젝트

Vite를 빌드 도구로 사용하여 개발한 간단한 **할 일 관리 웹 애플리케이션**입니다.

## 주요 기능

- **할 일(Todo) CRUD**
  - 새로운 할 일을 입력하고 목록에 추가
  - 체크박스를 통해 완료 상태 토글
  - '삭제' 버튼으로 할 일 제거

- **할 일 검색**
  - 검색창에 키워드 입력 시 해당 키워드가 포함된 목록만 필터링

## 기술 스택

- **Core:** React, Vite, JavaScript (ES6+)
- **State Management:** `useState`, `useRef`
- **Linting:** ESLint

## 프로젝트 구조

```plaintext
/
├── public/
├── src/
│   ├── components/
│   │   ├── Editor.jsx     # 할 일 입력
│   │   ├── Header.jsx     # 헤더
│   │   ├── List.jsx       # 목록
│   │   └── TodoItem.jsx   # 개별 아이템
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── .gitignore
├── index.html
├── package.json
└── vite.config.js
````

##  실행 방법

1. **의존성 설치**

   ```bash
   npm install
   ```
2. **개발 서버 실행**

   ```bash
   npm run dev
   ```
3. **프로덕션 빌드**

   ```bash
   npm run build
   ```

