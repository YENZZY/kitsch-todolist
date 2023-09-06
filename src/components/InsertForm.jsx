import styled from "styled-components";
import heart from "../image/cloud.png";
import {useState} from "react";

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


function InsertForm ({onInsert}){
    const [inputValue, setInputValue] = useState("");
    const handleSubmit =(e)=>{
        e.preventDefault();
        if(typeof onInsert === "function" && inputValue) {
            onInsert(inputValue);
        }
        setInputValue("");
    }
    
    
    return (
        <form onSubmit={handleSubmit} >
            <TodoInput>
            <InputBox placeholder="enter" value={inputValue} onChange={(event) => {
            setInputValue(event.target.value);
            }}/>
            <InputButton type="submit"/>
            </TodoInput>
        </form>
    )
    };
    
    export default InsertForm;