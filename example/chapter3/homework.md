# 3주차 과제

## 간단 설명

- `main`브랜치로부터 `chpater3/이름` 으로 브랜치 생성
- [더미 데이터](#더미-데이터)에 적힌 코드를 바탕으로
- [스펙](#스펙)에 적힌 기능을 구현하되
- [기술](#기술)에 적힌 스택을 반드시 한 번 이상 이용하고
- [주의사항](#주의사항)을 숙지하세요
- `(선택)`이 적힌 것들은 하고 싶으면 해보세요

## 스펙

1. 홈
    1. 채팅방 리스트 보임
        1. 클릭하면 입장
        2. 마우스 올리면 삭제 버튼 뜸
    2. 채팅방 생성 가능
        1. 홈에 별도의 버튼이 있어 누르면 채팅방 생성 가능
        2. 채팅방 생성시 상대방의 이름, 채팅방의 이름을 입력 가능
        3. 오픈챗인지 여부 선택 가능
    3. (선택) 채팅방 썸네일이 보이고 생성 시 등록 가능
2. 채팅방
    1. 채팅 내용 적을 수 있음
    2. 버튼이 2개라 `나의 채팅`, `상대방의 채팅`으로 채팅 보내기가 가능
    3. 새로운 채팅은 맨 아래에 달림
    4. 채팅 리스트의 길이가 화면을 넘어가면, 채팅방에 입장했을 때 최신 채팅(리스트 최하단)이 보임
    5. 채팅방을 클릭하면 홈으로 돌아갈 수 있는 상단바가 생겼다 사라졌다 함
        1. 사용성은 적당히 구현
    6. 채팅에 마우스 올리면 삭제 버튼 뜨고, 삭제 가능
    7. 오픈챗일 경우에는 `alert`나 이에 준하는 알림이 뜸
        1. 내용은 "[채팅방 이름] 오픈 채팅방에 오신 걸 환영합니다! 사기성 오픈채팅을 주의하세요"
    8. (선택) 프로필 이미지 / 이름 구현. 연속된 채팅에는 프로필이 뜨지 않고 사람이 바뀔 때만 표시

## 기술

- useState, useEffect 사용
- 텍스트 입력시 `<input type="text"/>`, 버튼에는 `<button />` 사용
- (선택) `<form/>`, `<input type="submit/>` 사용
- (선택) HTML 시맨틱 태그들 사용

## 주의사항

- example 디렉토리는 건들지 말고, 건들였다면 절대 커밋하지 말고 복구하기
- 더미 데이터는 과제 폴더 내부에 `.json`파일을 만든 후 아래 내용을 복사해놓고 사용하기
- 더미 데이터는 JSON으로 제공됩니다. 사용 방법은 서치해보고 모르겠으면 질문

## 더미 데이터

### 채팅방

```json
[
  {
    "to": "준영",
    "title": null,
    "chatData": [
      {
        "id": 0,
        "isMine": true,
        "content": "수업 끝남?"
      },
      {
        "id": 1,
        "isMine": true,
        "content": "바로 설입감?"
      },
      {
        "id": 2,
        "isMine": false,
        "content": "ㅇㅇ 끝남"
      },
      {
        "id": 3,
        "isMine": false,
        "content": "도서관 있다가"
      },
      {
        "id": 4,
        "isMine": false,
        "content": "갈거 같은디"
      },
      {
        "id": 5,
        "isMine": true,
        "content": "나 사라진데"
      },
      {
        "id": 6,
        "isMine": true,
        "content": "사라지 오셈"
      },
      {
        "id": 7,
        "isMine": false,
        "content": "콘센트 있음?"
      },
      {
        "id": 8,
        "isMine": true,
        "content": "ㅇㅇ"
      }
    ],
    "profile": null,
    "isOpenChat": false
  },
  {
    "to": "서현",
    "title": "이서현 감독님",
    "chatData": [
      {
        "id": 0,
        "isMine": true,
        "content": "나 할 일이 너무 많아"
      },
      {
        "id": 1,
        "isMine": true,
        "content": "마음의 여유가 없어서"
      },
      {
        "id": 2,
        "isMine": true,
        "content": "컷편을 할 수가 없어"
      },
      {
        "id": 3,
        "isMine": false,
        "content": "마음의 여유를 좀 찾아봐"
      },
      {
        "id": 4,
        "isMine": false,
        "content": "컷편 같이할 사람 없나?"
      }
    ],
    "profile": null,
    "isOpenChat": false
  },
  {
    "to": "면접관",
    "title": "Xction 면접",
    "chatData": [
      {
        "id": 0,
        "isMine": false,
        "content": "Xction 면접에 지원해주셔서 감사합니다"
      },
      {
        "id": 1,
        "isMine": false,
        "content": "내일 8시에 줌 링크로 접속해주시면 됩니다."
      },
      {
        "id": 2,
        "isMine": true,
        "content": "네 갑사합니다"
      }
    ],
    "profile": null,
    "isOpenChat": true
  }
]
```

- to: 상대방 이름
- title: 톡방 이름
- profile은 프로필 이미지 구현하고 싶을 때 이용
- isOpenChat은 오픈챗 여부 표시
- title이 null이면 채팅방 이름을 상대방 이름과 동일하게 표시
- chatData들의 id는 1씩 커지고, 중간에 채팅을 삭제해도 사라져도 기존 id들은 절대 바뀌지 않음
  - 채팅 추가 시 id가 자동으로 적절하게 생성되어야 함 (절대 겹치지 않게)
