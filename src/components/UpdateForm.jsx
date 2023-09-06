import { useState } from "react";
import styled from "styled-components";
import heart from "../image/todo_cloud.png";

/* 인풋 박스와 제출 버튼이 있는 공간 */
const TodoInput = styled.div`
  width: 58vw;
  height: 3.2vh;
  border: none;
  position: absolute;
  top: 0.4vh;
  left: 5.8vw;
  background-color: white;
`;

/* 인풋 박스 */
const InputBox = styled.input`
  width: 54vw;
  height: 2.8vh;
  color: #1a1a1a;
  border: none;
  line-height: 3vh;
  font-size: 2vh;
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

function UpdateForm({ preTodo, onSave }) {
  const [inputValue, setInputValue] = useState(preTodo.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (typeof onSave === "function" && inputValue) {
      onSave(inputValue, preTodo.key);
    }
    setInputValue("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <TodoInput>
        <InputBox
          value={inputValue || ""}
          onChange={(event) => {
            setInputValue(event.target.value);
          }}
        />
        <InputButton type="submit" />
      </TodoInput>
    </form>
  );
}

export default UpdateForm;
