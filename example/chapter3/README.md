# 챕터 3

_initiated with_
```text
yarn create vite chapter3 react-ts 
cd chapter3 
yarn install
```

## 목차
- 복습
  - 리액트
  - Props
  - 리렌더
  - useState
  - 유용한 자바스크립트 문법들
- Hooks API
  - Hooks API란? 
  - useState
  - useEffect
- 좋은 구조에 대한 고민
- 앞으로 배울 것
  - context API
  - react-router
  - typescript
  - better CSS
  - fetch, Promise

  
## 지금까지 배운 내용 정리
### 리액트
- jsx라는 문법 사용
- 컴포넌트 단위의 개발
- 부모->자식으로의 단방향 데이터 흐름

### Props
- 리액트에서 부모 컴포넌트가 자식 컴포넌트에게 값을 전달하는 방법
- 자식 컴포넌트의 parameter로 Props 객체 하나를 전달 (구조 분해 할당으로 사용하는 게 일반적)

### 리렌더
- 현재의 값으로 화면을 다시 그리는 것 
- 함수 컴포넌트가 다시 콜됨
- 우리가 직접 하는 게 아니라, useEffect의 setter 함수가 콜될 때처럼 특수한 경우에 자동으로 리렌더가 발생
- 부모가 리렌더되면, 모든 자식 컴포넌트도 순차적으로 리렌더 됨

### useState
- 컴포넌트의 값(=상태)을 저장하는 리액트 Hook
- `[getter, setter]`의 두 개 짜리 array로 구성
- getter: 현재의 값
- setter(): 값을 바꾸는 함수
- 주의할 점: setter 함수는 값을 함수 parameter로 들어온 값과 `교체`한다
### 유용한 자바스크립트 문법들
- Array.map()
- 구조 분해 할당
```js
const someObject = {property1: "hello", property2: 100};
const someArray = [0, 1];
const {property1, property2} = someObject;
const [item1, item2] = someArray;

console.log(property1) // "hello"
console.log(property2) // 100

console.log(item1) // 0
console.log(item2) // 1
```
- spread
```js
const originalArray = [0, 1, 2, 3];
const newArrayWithoutSpread = [originalArray, 4, 5];
const newArrayWithSpread = [...originalArray, 4, 5];

console.log(newArrayWithoutSpread); // [[0, 1, 2, 3], 4, 5]
console.log(newArrayWithSpread); // [0, 1, 2, 3, 4, 5]
```


## Hooks API
### hooks API란? 
- 함수형 컴포넌트에서 이용하는 특수한 API 함수
- 컴포넌트를 리렌더 시키거나, 라이프사이클에 관여하는 등 유용한 기능들을 자동으로 제공
- 리액트 컴포넌트 내에서 콜하지 않으면 오류가 발생 
- 반드시 `use` prefix로 시작
- 대표적인 hook: `useState`, `useEffect`
- 직접 만들 수도 있음

### useState
- 컴포넌트 내에서 특정한 값(상태)을 사용하기 위한 API 
- 컴포넌트가 리렌더되어도 초기화되지 않음
- 오직 setter 함수로 값이 바뀌며, 이 때 자동으로 리렌더가 일어남
```jsx
const [getter, setter] = useState(initialState);
```
### useEffect
- 컴포넌트의 특정 생명 주기(lifecycle)에 side effect를 발생시키는 API
- 컴포넌트가 mount, unmount, 리렌더될 때, 특정 값이 변화할 때 콜백 함수에 등록된 효과를 발생시킬 수 있음
- deps 배열로 의존성 관리
```jsx
useEffect(callbackFunction,dependencyArray)
```
```jsx
useEffect(() => {
    console.log("mount!"); // 마운트될 때
    return console.log("unmount!"); // 언마운트될 때
}, []);
```

```jsx
const [value, setValue] = useState(0);
useEffect(() => {
    console.log(value) // value 값이 바뀔 때
}, [value]);
```
```jsx
useEffect(()=>{console.log("rerender")}); // 리렌더할 때
```




