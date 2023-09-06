import styled  from "styled-components";
import heart from "../image/todo_cloud.png";
import  {useLayoutEffect } from 'react';


/* 투두 리스트 완료 버튼 -> 파란색 */
const Check = styled.button`
  width: 3vw;
  height: 3vh;
  position: absolute;
  left: 1vw;
  top: 0.5vh;
  cursor: pointer;

  filter: opacity(0.2) drop-shadow(0 0 0 #0000ff);

  background: url(${heart}) no-repeat;
  background-size: 3vw 3vh;
  border: none;
`;

/* 투두 리스트 삭제 버튼 -> 빨간색 */
const Remove = styled.button`
  width: 3vw;
  height: 3vh;
  position: absolute;
  right: 2vw;
  top: 0.5vh;
  cursor: pointer;

  filter: opacity(0.4) drop-shadow(0 0 0 #ff0000);

  background: url(${heart}) no-repeat;
  background-size: 3vw 3vh;
  border: none;

`;

/* 투두 리스트 수정 버튼 -> 보라색 */
const Update = styled.button`
  width: 3vw;
  height: 3vh;
  position: absolute;
  right: 5.5vw;
  top: 0.5vh;
  border: none;
  cursor: pointer;

  filter: opacity(0.4) drop-shadow(0 0 0 #ff3fff);

  background: url(${heart}) no-repeat;
  background-size: 3vw 3vh;

`;

/* 투두 리스트 글 */
const Todo = styled.div`
  width: 38vw;
  height: 4vh;
  position: absolute;
  left: 5vw;

  color: #1a1a1a;
  font-size: 2vh;
  line-height: 4vh;
  text-decoration: ${({$decoration}) => ($decoration=== "completed" ? 'line-through':'none')}
`;

/* 투두 리스트가 추가될 시 추가되는 박스 */
const ListBox = styled.li`
  width: 50vw;
  height: 4vh;
  margin: 1vh auto;
  position: relative;

  background-color: white;
  border-radius: 2.5vh;

`;


/* 리스트 컴포넌트 */
function  List({todoList, onComplete, onRemove, onUpdate}) {

  //하트버튼 로드
  const heartImgPreload = () => {
    let img = new Image();
    img.src = heart;
  };
  useLayoutEffect(() => {
    heartImgPreload();
  }, []); 
 
  
  return (
     todoList.map((item,index) =>{ 
      return(
        <ListBox key={item.key} >
          <Check  type="button" onClick={()=>{if(typeof onComplete === "function"){onComplete(index);}}}/>
          <Todo $decoration={item.isCompleted ? "completed":""}>{item.value}</Todo>
          <Update type="button" onClick={()=>{if(typeof onUpdate === "function"){onUpdate(index);}}}/>
          <Remove type="button" onClick={()=>{if(typeof onRemove === "function"){onRemove(index);}}}/>
        </ListBox>)})
     
  );
}

export default List;