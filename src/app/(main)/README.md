# 📂 (main) - 라우팅 그룹 & 최상위 레이아웃

이 폴더는 Next.js의 **라우트 그룹(Route Group)** 입니다. 괄호 `()`로 묶여있어 URL 경로에 영향을 주지 않으면서, 관련된 페이지와 레이아웃을 논리적으로 그룹화하는 역할을 합니다.

## 🎯 핵심 역할

1.  **홈페이지(`'/'`) 지정**: `(main)/page.tsx` 파일은 우리 프로젝트의 메인 홈페이지입니다.
2.  **공통 레이아웃 적용**: `(main)/layout.tsx` 파일은 `(main)` 그룹에 속한 모든 페이지에 공통적으로 적용될 레이아웃(e.g., Header, Footer, Navigation Bar)을 정의합니다.

## ✍️ 작성 규칙

* **`page.tsx`**:
    * 이 파일에는 비즈니스 로직을 직접 작성하지 마세요.
    * `src/pages` 폴더에 정의된 페이지 컴포넌트를 가져와 렌더링하는 역할만 수행합니다.
    * **예시**: `import { HomePage } from '@/pages/HomePage'; export default HomePage;`

* **`layout.tsx`**:
    * `src/widgets` 폴더의 `Header`, `Footer` 같은 위젯 컴포넌트를 조합하여 페이지의 전체적인 뼈대를 구성합니다.
    * 전역 상태 관리 Provider(e.g., React-Query, Zustand)를 감싸주는 위치로도 활용됩니다.

⚠️ **현재 페이지는 하나의 예시입니다. 만약 라우터가 변경되거나 main을 다른 방식으로 구성하고자 한다면 충분히 변경하셔도 좋습니다.**

## ❌ 금지 사항

* 이 폴더 내에 `features`, `entities`, `shared` 레이어의 컴포넌트를 직접 만들지 마세요.
* 복잡한 상태 관리 로직이나 API 호출 코드를 직접 작성하지 마세요. 모든 로직은 하위 레이어에서 처리되어야 합니다.