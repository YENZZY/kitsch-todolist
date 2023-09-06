import { useState } from "react";
import styled from "styled-components";
import heart from "../../image/todo_cloud.png";

/* 인풋 박스와 제출 버튼이 있는 공간 */
const TodoInput = styled.div`
  width: 90vw;
  height: 6vh;
  border: solid 2px #ff9eda;
  border-radius: 1.5vh;
  position: absolute;
  top: 0;
  background-color: white;
`;

/* 인풋 박스 */
const InputBox = styled.input`
  width: 80vw;
  height: 5.7vh;
  color: #1a1a1a;
  border: none;
  border-radius: 1.5vh;
  line-height: 6vh;
  font-size: 2.5vh;
  text-align: center;
  position: absolute;
  top: 0vh;
`;

/* 제출 버튼 */
const InputButton = styled.button`
  width: 10vw;
  height: 6vh;
  position: absolute;
  right: 0vw;
  cursor: pointer;

  filter: opacity(0.2) drop-shadow(0 0 0 #000000);

  background: url(${heart}) no-repeat;
  background-size: 10vw 6vh;
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
