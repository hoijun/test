# MBTI 성격 테스트

React + Vite로 구현한 MBTI 성격 테스트 웹 애플리케이션입니다.

## 기능

- 48개의 질문으로 구성된 MBTI 테스트
- 16가지 MBTI 유형 분석
- 각 지표별 상세한 비율 분석 (E/I, S/N, T/F, J/P)
- Recharts를 이용한 시각적 차트 제공
- 반응형 디자인 (모바일/태블릿/데스크톱)

## 기술 스택

- **프론트엔드**: React 18
- **빌드 도구**: Vite
- **라우팅**: React Router v6
- **스타일링**: Tailwind CSS
- **차트**: Recharts
- **언어**: JavaScript (ES6+)

## 프로젝트 구조

```
src/
├── components/      # 재사용 가능한 컴포넌트
│   ├── Chart.jsx       # 결과 차트 컴포넌트
│   ├── Progress.jsx    # 진행률 표시 컴포넌트
│   └── Question.jsx    # 질문 카드 컴포넌트
├── data/           # 데이터 파일
│   ├── questions.js    # 48개 MBTI 질문
│   └── types.js        # 16개 MBTI 유형 설명
├── pages/          # 페이지 컴포넌트
│   ├── Home.jsx        # 시작 페이지
│   ├── Test.jsx        # 테스트 진행 페이지
│   └── Result.jsx      # 결과 페이지
├── utils/          # 유틸리티 함수
│   └── calculator.js   # MBTI 계산 로직
├── App.jsx         # 메인 앱 컴포넌트
└── main.jsx        # 엔트리 포인트
```

## 시작하기

### 설치

```bash
npm install
```

### 개발 서버 실행

```bash
npm run dev
```

브라우저에서 http://localhost:5173 을 열어 확인하세요.

### 빌드

```bash
npm run build
```

### 프리뷰

```bash
npm run preview
```

## 사용 방법

1. 시작 페이지에서 "테스트 시작하기" 버튼 클릭
2. 48개의 질문에 대해 자신과 가장 가까운 답변 선택
3. 모든 질문 완료 후 자동으로 결과 페이지로 이동
4. MBTI 유형, 상세 설명, 차트 확인

## 라이센스

MIT
