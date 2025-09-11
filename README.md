# 🍷 ToTasty!  
**모두 함께 To tasty! 한 모금으로 이어지는 취향 모임**
**커피, 와인, 위스키 시음회 기반 모임 서비스**  

[배포 페이지](https://to-tasty-front-khaki.vercel.app/) | [GitHub Repository](https://github.com/to-tasty/toTasty-front)


## 프로젝트 소개
**커피, 와인, 위스키 등 다양한 시음회를 기반으로 한 취향 공유 모임 서비스**  
사용자는 시음 모임 정보를 등록, 조회, 참가 신청 및 후기를 공유할 수 있으며, 새로운 사람들과 취향을 나누는 경험을 제공합니다.  
<br/>


## 주요 기능
-  **소셜 로그인 (카카오)**  
-  **시음 모임 등록 / 조회 / 상세 확인**  
-  **참가 신청 및 후기 작성**  
-  **모임 필터링 및 무한 스크롤** (TanStack Query 기반)  
-  **마이페이지** (내가 신청한 모임, 작성한 후기, 위시리스트, 프로필 관리)  
-  **권한 관리** (로그인 사용자만 접근 가능한 페이지 보호)
<br/>


## 기술 스택
### Frontend
- **Next.js**
- **TypeScript**
- **Zustand** (상태 관리)
- **Tailwind + Shadcn** (UI/스타일)
- **TanStack - Query / Form** (데이터 패칭, 폼 관리)

### 배포 및 저장소 관리
- **Vercel**
- **GitHub & GitHub Actions**
- **Swagger**
<br/>

## 프로젝트 구조 (FSD 기반)
```plaintext
src/
├── app/              # 라우팅 및 전역 설정
├── shared/           # 공용 컴포넌트, 유틸, 훅, 타입
├── features/         # 독립적인 기능 단위 (예: 로그인, 모임 생성)
├── entities/         # 도메인 단위 엔티티 (user, meeting 등)
├── widgets/          # 페이지 내 조합 가능한 UI 블록
└── pages/            # Next.js 라우팅 페이지
```
<br/>
## 설치 및 실행 방법

```bash
# 저장소 클론
git clone https://github.com/to-tasty/toTasty-front.git
cd to-tasty-front

# 패키지 설치
npm install

# .env 파일 설정 (환경 변수 세팅)
NEXT_PUBLIC_API_URL=YOUR API URL HERE
NEXT_PUBLIC_KAKAO_CLIENT_ID=YOUR KAKAO CLIENT ID HERE
NEXT_PUBLIC_KAKAO_LOGIN_URI=YOUR KAKAO LOGIN URI HERE
NEXT_PUBLIC_KAKAO_REDIRECT_URI=YOUR KAKAO REDIRECT URI HERE

# 개발 서버 실행
npm run dev

# 브라우저 접속
http://localhost:3000
```
