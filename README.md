![쿠팡로고](https://user-images.githubusercontent.com/97586683/201509418-367ff770-16e7-4cba-a2b3-2ab50d67a88c.png)

<br/>

# Coupang-frontend

**31기 IN SOPT 합동세미나 3조**

<br/>

## 개발자 소개 및 역할 분배

<br/>
<center>

|                    최유진                     |                     김형겸                      |                   박현지                    |
| :-------------------------------------------: | :---------------------------------------------: | :-----------------------------------------: |
| [@Yujin Choi](https://github.com/choichoijin) | [@Hyeongkyeom Kim](https://github.com/Brokyeom) | [@HyeonJi Park](https://github.com/iamphj3) |
|      장바구니 뷰<br/>카테고리 뷰 및 api       |          footer<br/>홈 뷰<br/>BEST api          |   Navbar<br/>header<br/>TODAYS'S HOT api    |

</center>

<br/>

## 협업 방식

---

### 1. ⌨️ Code Convention

<details>
<summary>토글 버튼을 클릭하면 확인할 수 있습니다.</summary>

- ESLint, prettier 사용
- 폴더명은 소문자로 시작
- Event handler 이름 : `on`으로 시작, 복잡한 네이밍의 경우 `handle~`
- 배열과 관련된 변수명은 `__List` (ex. reservationList)
- 변수, 함수 : Camel case 사용
- container와 wrapper 구분해서 사용하기
  `container`: <b>여러 개의 요소</b>를 감싸는 div.
  `wrapper`: <b>단일 요소</b>의 레이아웃을 위한 div.
- 함수
  - 함수명은 동사로 시작
  - `const 함수명 = () => {}` 형식으로 작성
- 컴포넌트
  - 컴포넌트를 정의한 파일 : Pascal case 사용
  - `function 컴포넌트명() {}` 형식으로 작성
- styled-components
  - 코드 하단에 작성
  - px 대신 rem 사용 (ex. 10px = 1rem)
  - 항상 맨 앞에 `St` 붙여주기
  - 최상단 태그 이름은 `St[컴포넌트명]`
    ```jsx
    function Home() {
      return <StHome>...</StHome>;
    }
    ```
  - 색상은 항상 아래처럼 ThemeProvider 활용해서 설정
    ```jsx
    button {
      background-color: ${(props) => props.theme.colors.coupangBlue};
      color: ${(props) => props.theme.colors.coupangGreen};
    }
    ```
- API 호출 함수 : api.ts에 작성하기
- 피그마에서 svg를 export해서 `src/assets/icons` 혹은 `src/assets/images`에 저장하고, `src/assets/index.js`에 아래처럼 추가해 사용
  ```js
  export { default as icSample } from "./icons/ic_sample.svg";
  export { default as imgSample } from "./images/img_sample.svg";
  ```
  </details>

<br/>

## 2. commit message

```
- init: 개발 환경 초기 세팅
- feat: 새로운 기능 추가
- design: UI를 위한 스타일링
- fix: 버그 수정
- docs: 문서 추가, 수정, 삭제
- style: 코드 포맷팅(코드 순서 변경, 세미콜론 추가)
- refactor: 코드 리팩토링
- chore: 그 외 자잘한 수정
```

<br/>

## 3. Git Branch Strategy

- github flow
- **main - develop - feature**
  - main : 배포
  - develop : 개발된 기능을 통합하는 브랜치
  - feat/[기능] : 기능별로 개발을 진행하는 브랜치
- 브랜치명 : **feat/페이지 지름 - 구현할 기능** (ex. 카페고리 페이지의 뷰 작업일 경우 _category-ui_, 홈 화면의 베스트 상품 작업일 경우 _home-bestitem_)
- PR제목 : **[브랜치명 작업 내용 요약]**
- 팀원 2인의 리뷰 후에 approve 받아야 develop 브랜치에 merge 가능

<br/>

## 4. 폴더 구조

```
├── mock-data 🗂 목 데이터 저장
├── package.json 📦 설치된 패키지를 관리하는 파일
├── public
│   └── assets
│   │   ├── icons 🗂 아이콘 저장
│   │   ├── images 🗂 이미지 저장
└── src
    ├── App.tsx ✡️ 앱의 라우팅과 글로벌 스타일 지정
    ├── index.ts
    ├── component
    │   ├── common 🗂 공통으로 쓰일 컴포넌트 저장
    │   ├── home 🗂 home 페이지에 쓰일 컴포넌트 저장
    │   ├── category 🗂 category 페이지에 쓰일 컴포넌트 저장
    │   ├── cart 🗂 cart 페이지에 쓰일 컴포넌트 저장
    │   └── myPage 🗂 myPage 페이지에 쓰일 컴포넌트 저장
    ├── pages 🗂 라우팅 시 보여질 페이지 컴포넌트 저장
    │   ├── home
    │   ├── category
    │   ├── cart
    │   └── myPage
    ├── libs
    │   └── api.ts
    └── styles
        ├── GlobalStyle.ts
        └── themeprovider.ts
```
