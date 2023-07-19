# 원티드 프리온보딩 4과제

## 실행 방법

- 코드 다운받아 실행하기

```
$ git clone https://github.com/JB-JS/pre-onboarding-11th-4.git
$ npm install
```

- API json-sever 실행방법
  서버 깃헙 주소: https://github.com/walking-sunset/assignment-api

```
$ git clone https://github.com/walking-sunset/assignment-api.git
$ npm install
$ npm start
```

배포링크: https://pre-onboarding-11th-4.vercel.app/

## 사용 기술

- 언어: `typescript`
- 스타일링: `emotion`
- HTTP Client: `axios`
- 배포: `vercel`

## 과제 구현 설명

📌 API 호출별로 로컬 캐싱 구현

- `localStorage`를 사용해 검색어를 키값으로 저장해 조회해 존재하면 사용하고 아니라면 사용안하는 방식으로 구현했습니다
- `expire time`은 expire 라는 값을 저장해 현재시간과 비교해 최대 2분까지 검색한 기록을 캐싱하는 기능을 구현했습니다

📌 입력마다 API 호출하지 않도록 API 호출 횟수를 줄이는 전략 수립 및 실행

- `Debouncing` 기능을 사용해 여러번 검색함수를 실행하더라도 0.6초뒤에 마지막 함수가 실행되서 api 호출횟수를 줄이게 구현했습니다
- `Debouncing` 기능을 혹시라도 재사용 할 일이 있을수도 있어 커스텀훅을 사용해 제작하였습니다.

📌 키보드만으로 추천 검색어들로 이동 가능하도록 구현

- `tabIndex` 특성을 사용해 키보드에서 탭키를 눌렀을시 이동가능하게 구현했습니다.
- `웹 접근성`을 위해 state를사용해 구현하지않고 웹에서 제공해주는 기능을 사용했습니다.

## 추가 구현 사항

📌 검색시 하이라이트 처리

- RegExp 와 split을 활용해 react에서 replace를 사용하지않고 컴포넌트 방식으로 하이라이트를 구현했습니다
