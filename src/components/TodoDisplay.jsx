import styled from "styled-components";
import List from "./List";
import heart from "../image/todo_cloud.png";

/* 각 페이지마다 바뀌는 실질적인 공간 */
const Page = styled.div`
  width: 54.9vw;
  height: 39.5vh;
  z-index: 5;
  opacity: 1;
  position: absolute;
  top: 17.7vh;
  left: 22.5vw;
`;

/* 투두리스트 배너*/
const ListText = styled.div`
  position: absolute;
  top: -4vh;
  left: 24.5vw;
  color: white;
  font-size: 3vh;
  font-weight: bold;
`;


/* 할 일 목록이 추가되는 공간 */
const Lists = styled.ul`
  width: 54.9vw;
  height: 34vh;
  overflow: scroll;
  list-style-type: none;

  margin: 1vh 0;
  padding: 0;

  position: absolute;
  top: 4vh;
`;

/* 인풋 박스와 제출 버튼이 있는 공간 */
const TodoInput = styled.div`
  width: 49vw;
  height: 2.8vh;
  border: none;
  position: absolute;
  top: 0.8vh;
  left: 5vw;
  background-color: white;
`;

/* 인풋 박스 */
const InputBox = styled.input`
  width: 45vw;
  height: 2.3vh;
  color: #1a1a1a;
  border: none;
  line-height: 3vh;
  font-size: 2vh;
  font-style: italic;
  text-align: center;
  position: absolute;
  top: 0vh;
`;

/* 제출 버튼 */
const InputButton = styled.button`
  width: 2.5vw;
  height: 2.5vh;
  position: absolute;
  top: 0.1vh;
  right: 0.5vw;
  cursor: pointer;

  filter: opacity(0.2) drop-shadow(0 0 0 #000000);

  background: url(${heart}) no-repeat;
  background-size: 2.5vw 2.5vh;
  border: none;
`;

/* 투두 리스트 화면 컴포넌트 */
function TodoDisplay() {
  return (
    <Page>
      <ListText>to-do list</ListText>
        <TodoInput>
          <InputBox placeholder="enter" />
          <InputButton />
        </TodoInput>
        <Lists>
          <List />
          <List />
          <List />
          <List />
          <List />
          <List />
          <List />
        </Lists>
    </Page>
  );
}

export default TodoDisplay;
