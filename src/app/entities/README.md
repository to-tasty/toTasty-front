# 📦 entities - 핵심 비즈니스 개체

이 레이어는 프로젝트의 **핵심 데이터 단위(비즈니스 개체)** 를 정의합니다. 예를 들어 `User`, `Post`, `Product`, `Comment` 등이 여기에 해당합니다.

## 🎯 핵심 역할

* 애플리케이션의 중심이 되는 데이터의 구조와 관련 코드를 한 곳에 모아 관리합니다.
* 데이터를 표현하는 순수한 UI 컴포넌트(e.g., `UserAvatar`, `PostCard`)를 포함합니다.

## 📁 폴더 구조 (예시: `Post` 엔티티)

```bash
entities/
└── post/
    ├── api/          # Post 관련 API 요청 함수 (getPost, getPosts, ...)
    ├── model/        # Post 데이터 타입(interface/type), 상태 관리 로직(Zustand, Jotai)
    ├── ui/           # Post 데이터를 받아 순수하게 보여주는 UI 컴포넌트 (PostCard.tsx, PostAuthor.tsx)
    └── index.ts      # 외부로 노출할 모듈을 export (Public API)
```