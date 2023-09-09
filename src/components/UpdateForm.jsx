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

  @media (max-width: 741px) {
    width: 90vw;
    height: 6vh;
    border: solid 2px #ff9eda;
    border-radius: 1.5vh;
    position: absolute;
    top: 0;
    left: 0;
  }
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

  @media (max-width: 741px) {
    width: 80vw;
    height: 5.7vh;
    border-radius: 1.5vh;
    line-height: 6vh;
    font-size: 2.5vh;
  }
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

  @media (max-width: 741px) {
    width: 10vw;
    height: 6vh;
    right: 0vw;
    background-size: 10vw 6vh;
  }
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
