# Project Architecture & Rules (야호트래블)

## 1. CSS 스타일링 아키텍처
- **채택 방식**: **Tailwind CSS** + Lucide React
- **원칙**:
  - 50대 이상 중장년층 타깃을 위한 가독성 우선(기본 폰트 16px 이상, 명도 대비 준수, 충분한 터치 영역)
  - 컬러 팔레트: 신뢰를 주는 딥 네이비(`navy-900`/`navy-800`), 프리미엄 골드/앰버, 편안한 웜 베이지/아이보리
  - 완전한 반응형 디자인(Mobile First & Desktop 최적화)

## 2. 버전 관리 및 캐시 버스팅(Cache-Busting) 체계
- **시맨틱 버전(SemVer)**: `package.json` 및 `src/version.ts`의 `APP_VERSION` (예: `1.0.0`)
- **캐시 버스팅 태그**: `src/version.ts`의 `BUILD_TAG` (예: `20260909v1`)
- **원칙**: 주요 변경 및 배포 시 `BUILD_TAG`를 일자/회차 기반으로 갱신하여 클라이언트 캐시 문제를 원천 방지한다.

## 3. 프론트엔드 프레임워크 & 런타임
- **Framework**: React + TypeScript + Vite
- **Shell / OS**: Windows PowerShell 호환 (`npm.cmd`, `npx.cmd` 사용)
- **Zero Build Errors**: 모든 마일스톤 및 릴리즈 전 `npm.cmd run build` 검증 필수
