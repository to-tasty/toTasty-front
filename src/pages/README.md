# 📄 pages - 페이지 단위 UI 컴포넌트

이 레이어는 **사용자가 보게 될 완전한 페이지 단위의 UI 컴포넌트**를 구성합니다. `app` 디렉토리의 라우팅과 1:1로 매칭되는 UI 구조를 가집니다.

## 🎯 핵심 역할

* 여러 `widgets`와 `features`, `entities` 컴포넌트를 조합하여 하나의 완전한 페이지를 완성합니다.
* 페이지 레벨의 레이아웃과 UI 구조를 책임집니다.

## 📁 폴더 구조

```bash
pages/
└── HomePage/
    └── index.tsx     # 홈페이지 UI 컴포넌트
└── PostListPage/
    └── index.tsx     # 게시글 목록 페이지 UI 컴포넌트
└── PostDetailPage/
    └── index.tsx     # 게시글 상세 페이지 UI 컴포넌트
```


## ✍️ 작성 규칙

* **조립의 역할**: 이 레이어는 UI 컴포넌트를 '조립'하고 '배치'하는 역할에 집중합니다.
* **데이터 주입**: `app` 폴더의 서버 컴포넌트로부터 `props`를 통해 데이터를 전달받아 하위 컴포넌트로 흘려보냅니다.
* **의존성**: `widgets`, `features`, `entities`, `shared` 레이어에 모두 의존할 수 있습니다.

## ❌ 금지 사항

* 이곳에서 직접 API를 호출하거나 복잡한 비즈니스 로직을 작성하지 마세요. 데이터 fetching은 `app`에서, 로직은 `features`나 `entities`에서 처리합니다.
* 공통으로 재사용될 만한 컴포넌트를 이 레이어에 직접 만들지 마세요. `widgets`나 `features`로 분리해야 합니다.