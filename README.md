## 메달 트래커

- `제출 폼 UI 구현하기`: 나라 이름과 금, 은, 동 메달 수를 입력할 수 있는 폼을 만듭니다.
  ![title](https://github.com/user-attachments/assets/a141a638-3790-4210-9c66-f59f7c45e73f)

- `메달 집계 CRUD 구현하기`
  - **Create**: 새로운 나라와 그 나라가 획득한 메달 수를 추가합니다.
    ![title](https://github.com/user-attachments/assets/35b18a2e-248d-4be1-a5c2-37de74cc0bdf)
  - **Read**: 나라별 메달 집계 리스트를 보여줍니다.
    ![title](https://github.com/user-attachments/assets/fe9c5e90-051f-46f9-ab1b-4abe6e6c1991)
  - **Update**: 기존에 추가된 나라의 메달 수를 수정할 수 있습니다.
    ![title](https://github.com/user-attachments/assets/6ebfd502-873c-4f63-b243-e80f6ca5ab44)
  - **Delete**: 나라 정보를 삭제할 수 있습니다.
    ![title](https://github.com/user-attachments/assets/8b316757-cfc4-4274-95e6-edf561f71cbf)  
    ![title](https://github.com/user-attachments/assets/2a2981ae-4d02-4936-9247-bc35aa377365)
- `정렬`: 메달 집계는 금메달 수를 기준으로 내림차순 정렬되어야 합니다.
  ![title](https://github.com/user-attachments/assets/243f1e79-d6d7-484b-a69e-283e19400e4e)

#### 이 외에도 필요하다고 생각했던 것들

- 중복된 국가를 추가할 경우, alert가 뜨면서 입력되지 않는 것
  ![title](https://github.com/user-attachments/assets/89eaa93a-0ac5-4cde-b5f1-f794994439b9)

- 국가명을 입력하지 않거나 리스트에 없는 국가명을 입력한 채로 업데이트할 경우
  ![title](https://github.com/user-attachments/assets/5c5a0096-0f88-4f53-a915-e82348daa82c)

## 어려웠던 점

#### 1. 리스트 추가

- useState를 이용해 상태를 관리하고 리스트를 추가해 덮어씌운다는걸 제대로 이해하지 못해 addColumn(), innerText()..등으로 테이블의 행을 추가하는 코드를 짜놓고 헤맴
- event.preventDefault(); 를 하단에 넣어 국가명이 중복됐을 때 alert가 뜨고 아무 동작이 되면 안되는데 return과 함께 페이지가 새로고침됨 => event.preventDefault(); 를 상단으로 올려 해결

#### 2. 리스트 수정

- 수정에 대한 과정을 상세히 생각해 정리하지 못해 더 힘들었음 + 리스트 추가에서 엉뚱한데에 시간을 너무 많이씀

#### 3. 리스트 삭제

- 막연하게 delete만 생각해서 역시 헤맴 => 리스트에서 선택된 객체만 제외한 후, 다시 펼쳐서 새롭게 넣어주는 방식이었음

#### 4. 리스트 정렬

- 내림차순으로 코드를 짜는 건 쉽게 했는데 비교연산자(===)를 대입연산자(=)로 넣는 실수로 모든 금메달 갯수가 동일하게 나오는 문제가 생겼었음

#### 5. 컴포넌트 관리

- 컴포넌트를 나눠 관리하는 것이 감이 잡히지 않아 App.jsx에 모든걸 때려 넣어 작성함. 컴포넌트를 나누겠다고 리스트추가/리스트수정/리스트삭제 기능별로 jsx파일을 나눠봤지만 갑자기 먹통이 됨. . => 제출폼과 리스트 두개의 컴포넌트로 나누어 관리하라는 피드백

<br>

## 회고

- 아직도 CRUD 만드는 것은 어렵지만 적어도 앞으론 js로 행을 만들어 넣는 일은 ,. 없지 않을까
- 삭제시 alert에 삭제하려는 국가명도 함께 명시해주면 좋았겠다 => "국가명1 을 정말 삭제하시겠습니까?"
- 컴포넌트를 나누는 방법 숙지
