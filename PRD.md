# 제품 요구사항 정의서(PRD) — 피그마 to code

## 0. 디자인 원본

- 피그마 URL: https://www.figma.com/design/HNMrVfu1UrCBpLl5bfdVeo/%E2%9C%A8%ED%8F%AC%ED%8A%B8%ED%8F%B4%EB%A6%AC%EC%98%A4-%EC%9D%B4%EB%A0%A5%EC%84%9C-%ED%8E%98%EC%9D%B4%EC%A7%80%EA%B5%AC%EC%84%B1--%EC%86%A1%EC%9B%90%EC%9D%BC-?node-id=7117-998&t=R3PB9mJxvF2nDDyP-4
- 기준 노드: `7117:998` — Portfolio Website
- 구현 목표: 제공된 디자인과 100% 동일하게 구현
- 출처: 피그마 디자인에서 확인

## 1. 서비스 개요

- 서비스명: 송원일 포트폴리오 (피그마 파일명·프로필에서 확인)
- 목적: 영상 편집·모션 그래픽·콘텐츠 제작 역량과 경력·프로젝트·연락처 소개 (디자인 기반 추정)
- 대상: 채용 담당자 및 프로젝트 협업을 검토하는 잠재 의뢰인 (디자인 기반 추정)
- 핵심 시나리오: Hero에서 제작자 확인 → About에서 이력 확인 → Selected Work 탐색 → Services 확인 → Contact CTA 실행 (디자인 흐름 기반 추정)

## 2. 구현 방식 및 기술 환경

- 구현 방식: SPA (사용자 선택)
- 프론트엔드: Vite + React 19 계열, JavaScript 전용, React Compiler
- 스타일링: Tailwind CSS v4 (`tailwindcss`, `@tailwindcss/vite`, `@import "tailwindcss";`, `tailwind.config.js` 없음)
- 빌드: 구현 시점의 Vite 최신 안정 버전. Node.js는 해당 Vite 공식 요구 버전 적용
- 라우팅: 단일 세로 페이지이므로 `react-router-dom` 미설치
- 라이브러리:
  - GSAP + `@gsap/react`: 섹션 스크롤·전환. 필요한 플러그인만 등록
  - Swiper: Selected Work 프로젝트 슬라이드. 필요한 모듈·CSS만 사용
  - 그 외 애니메이션·캐로셀·UI 라이브러리 없음
- 데이터 저장: 없음. 디자인 콘텐츠를 정적 데이터로 구현 (사용자 선택)
- 배포: Vercel. 클라이언트 경로 추가 시 `vercel.json`에서 `/index.html` 재작성
- 공식 문서 확인일: 2026-09-02
- 참조: [Vite](https://vite.dev/guide/), [Tailwind CSS v4](https://tailwindcss.com/blog/tailwindcss-v4), [React Compiler](https://react.dev/learn/react-compiler), [GSAP](https://gsap.com/docs/v3/Installation/), [Swiper React](https://swiperjs.com/react), [Vercel Vite](https://vercel.com/docs/frameworks/frontend/vite)

## 3. 디자인 구현 사양

### 디자인 토큰

Tailwind `@theme`에 피그마 변수를 의미 기반 토큰으로 정의하고 임의 시각 값은 금지한다.

- 색상: `#121212`, `#555555`, `#616161`, `#ffffff`, `rgba(0,0,0,.03)`, `#f7f7f7`, `#eee5dc`, `#d9dbeb`, `#81c3a3`, `#e53d38`, `#c2c2c2`
- 글꼴: Pretendard Regular·Medium·SemiBold·Bold
- 간격: `4px`, `12px`, `16px`, `18px`, `20px`, `40px`
- 라운드: `2px`, `4px`, `8px`, `33px`, `9999px`
- 기준 프레임: 섹션별 `1920×1080px`
- 출처: 피그마 디자인에서 확인

### 공통 컴포넌트

- `Header`, `SectionPagination`, `CtaButton`, `SectionWatermark`
- `ProfileInfoGroup`, `ProjectSlide`, `ServiceCard`, `ContactTrack`
- `LoadingIndicator`, `InlineError`

### 에셋

- 인물 사진, 프로젝트 썸네일, 장식 이미지, 메뉴 아이콘, 페이지네이션을 피그마에서 그대로 내려받는다.
- `public/assets/{images,icons,fonts}`로 분리한다.
- 벡터는 원본 SVG를 사용하고 직접 다시 그리지 않는다.
- 임시 Figma MCP URL을 최종 코드에 남기지 않는다.
- 의미 있는 이미지는 대체 텍스트를 제공하고 장식 이미지는 보조기술에서 제외한다.

## 4. 핵심 화면 및 기능 명세

### Hero

- warm beige 배경, MENU, 세로 페이지네이션, 인물 이미지
- `ONE SHOT에서`, `ONE FRAME을,`, `섬세하게 다듬다.`
- `이력서`, `깃허브` CTA. 확인된 URL만 연결하며 미확인 URL을 임의 생성하지 않는다.

### About

- lavender 배경, `보이는 완성도 보다, 믿을 수 있는 과정을 설계합니다.`
- PROFILE INFO, 인적사항, 학력 및 자격, 경력, 인턴 및 대외활동, ABOUT 워터마크
- 디자인의 개인정보와 이력 문구를 그대로 사용한다.

### Selected Work

- 프로젝트 썸네일·제목·설명·분류·메타데이터, WORK 워터마크
- Swiper 기반 프로젝트 탐색과 키보드·터치 조작

### Services

- 서비스 소개와 FRONTEND DEVELOPMENT, BACKEND DEVELOPMENT, ANDROID DEVELOPMENT 카드
- 피그마 원본 곡선·코너 장식

### Contact

- 편집 타임라인 형태의 이름·이메일·전화번호·프로젝트 유형
- REC, 재생 헤드, 타임코드, 트랙, `START THE PROJECT →`
- 입력 저장이나 전송 API는 만들지 않는다. 확인되지 않은 CTA 동작도 생성하지 않는다.

### 전역 동작

- `1080px` 기준 섹션 단위 스크롤, 휠·키보드·터치 지원
- MENU와 페이지네이션의 부드러운 앵커 이동 및 현재 섹션 동기화
- GSAP 모션은 `prefers-reduced-motion`에서 제거하거나 즉시 전환으로 대체
- 출처: 사용자 선택 및 디자인 페이지네이션 구조 기반 보정

### 상태 처리

- 로딩: 필수 에셋 준비 중 브랜드 컬러 기반 초기 인디케이터
- 빈 데이터: 선택적 빈 항목은 임의 문구 없이 숨김
- 오류: 해당 영역에 안내·재시도 제공, 전체 레이아웃과 탐색 유지
- 출처: 사용자 선택

## 5. 비기능 요구사항

- 반응형: `1920×1080px`에서 픽셀 일치. 별도 모바일 프레임이 없어 작은 화면은 디자인을 보존하며 재배치하고 겹침·잘림·가로 스크롤을 방지한다. 모바일에서는 가독성을 위해 섹션 스냅을 완화한다. (데스크톱은 디자인 확인, 작은 화면은 디자인 기반 추정)
- 접근성: WCAG 2.2 AA, 키보드 탐색, 가시적 포커스, 시맨틱 요소, `aria-current`, 대체 텍스트, 모션 감소 지원
- 성능: 첫 화면 우선 로드, 이후 이미지 지연 로드, 필요한 폰트 굵기·Swiper 모듈·GSAP 플러그인만 포함
- 보안: 서버 통신·입력 저장 없음, 새 탭 링크에 `noopener noreferrer`, HTTPS URL 검증, 비밀값을 클라이언트에 포함하지 않음
- 출처: 사용자 선택에 따른 표준 기본값

## 6. 인공지능 작업 지시 순서

1. 아래 구조와 각 파일 역할을 먼저 제안한다.
   ```text
   public/assets/{fonts,icons,images}/
   src/components/{common,navigation,portfolio,states}/
   src/{data,hooks,sections}/
   src/{App.jsx,main.jsx,index.css}
   index.html, package.json, vercel.json, vite.config.js
   ```
2. Vite React JavaScript 프로젝트와 React Compiler를 공식 방식으로 구성한다.
3. Tailwind CSS v4 Vite 플러그인과 `@theme` 디자인 토큰을 설정한다.
4. 피그마 원본 에셋을 내려받아 역할별 폴더에 저장한다.
5. 공통 컴포넌트를 props로 변형 가능하게 구현한다.
6. Hero, About, Selected Work, Services, Contact를 디자인과 일치하게 조립한다.
7. Swiper 프로젝트 슬라이드와 GSAP 섹션 이동·전환을 구현한다.
8. MENU·페이지네이션·휠·키보드·터치 탐색을 연결한다.
9. 로딩·빈 데이터·오류 상태를 구현한다.
10. 데스크톱 일치 후 반응형·접근성을 적용한다.
11. `npm run build`와 `npm run preview`로 검증한다.
12. Vercel 설정을 확인하고 피그마 스크린샷 중첩 비교로 차이를 수정한다.

## 7. 절대 규칙 및 제한 사항

### 금지 사항

- 피그마에서 확인되지 않은 텍스트·이미지·기능·URL·데이터를 생성하지 않는다.
- 데이터 저장, 폼 제출, 인증, 관리자 기능을 추가하지 않는다.
- 미사용 패키지 또는 GSAP·Swiper 외 UI·모션·캐러셀 라이브러리를 추가하지 않는다.
- `.ts`, `.tsx`, `tsconfig`, `tailwind.config.js`를 생성하지 않는다.
- GSAP·Swiper를 CDN으로 불러오지 않는다.
- 원본 에셋을 유사 이미지·직접 제작 SVG·플레이스홀더로 대체하지 않는다.
- 만료성 Figma URL을 최종 코드에 남기거나 디자인 문구를 임의 교정하지 않는다.

### 필수 규칙

- 피그마와 레이아웃·간격·색·타이포·이미지·상태를 100% 일치시킨다.
- 일반적인 파일 구조를 사용하고 구현 전 구조와 역할을 설명한다.
- 컴포넌트는 PascalCase, JS 변수·함수는 camelCase, 에셋은 소문자 케밥 케이스로 명명한다.
- 모든 시각 값은 `@theme` 토큰을 사용한다.
- 필요한 의존성과 모듈만 설치한다.
- 5개 섹션, 섹션 이동, 페이지네이션, 메뉴 앵커, CTA, 프로젝트 슬라이드를 구현한다.
- 로딩·빈 데이터·오류 상태를 처리한다.
- 구현 시점에 공식 설치 문서를 재확인하고 확인일을 갱신한다.

## 8. 완료 기준

- [ ] `1920×1080px` 기준 5개 섹션이 피그마와 시각적으로 일치한다.
- [ ] 텍스트·색·폰트·행간·간격·라운드·장식이 디자인과 일치한다.
- [ ] 피그마 원본 이미지·아이콘이 누락이나 왜곡 없이 표시된다.
- [ ] MENU·페이지네이션과 현재 섹션 표시가 동기화된다.
- [ ] 휠·키보드·터치 탐색과 프로젝트 슬라이드가 정상 동작한다.
- [ ] CTA는 확인된 URL만 사용한다.
- [ ] 로딩·빈 데이터·오류에도 레이아웃과 탐색이 유지된다.
- [ ] 태블릿·모바일에서 겹침·잘림·의도하지 않은 가로 스크롤이 없다.
- [ ] 접근성 및 모션 감소 설정이 동작한다.
- [ ] TypeScript·금지 파일·미사용 패키지·금지 라이브러리가 없다.
- [ ] `npm run build`가 성공하고 Vercel에서 에셋과 SPA 접근이 정상이다.
