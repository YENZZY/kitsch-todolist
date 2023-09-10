import styled from "styled-components";
import heart from "../image/todo_cloud_smallsize.png";


/* 투두 리스트 완료 버튼 -> 파란색 */
const Check = styled.button`
  width: 3vw;
  height: 3vh;
  padding:0;
  position: absolute;
  left: 1vw;
  top: 1vh;
  cursor: pointer;

  filter: opacity(0.2) drop-shadow(0 0 0 #0000ff);

  background: url(${heart}) no-repeat;
  background-size: 3vw 3vh;
  border: none;
 
  @media (max-width: 740px) {
    width: 6vw;
    height: 4vh;
    left: 1.5vw;
    top: 1vh;
    background-size: 6vw 4vh;
  }
`;

/* 투두 리스트 삭제 버튼 -> 빨간색 */
const Remove = styled.button`
  width: 3vw;
  height: 3vh;
  padding:0;
  position: absolute;
  right: 2vw;
  top: 1vh;
  cursor: pointer;

  filter: opacity(0.4) drop-shadow(0 0 0 #ff0000);

  background: url(${heart}) no-repeat;
  background-size: 3vw 3vh;
  border: none;

  @media (max-width: 740px) {
    width: 6vw;
    height: 4vh;
    right: 2vw;
    top: 1vh;
    background-size: 6vw 4vh;
  }
`;

/* 투두 리스트 수정 버튼 -> 보라색 */
const Update = styled.button`
  width: 3vw;
  height: 3vh;
  padding:0;
  position: absolute;
  right: 5.5vw;
  top: 1vh;
  border: none;
  cursor: pointer;

  filter: opacity(0.4) drop-shadow(0 0 0 #ff3fff);

  background: url(${heart}) no-repeat;
  background-size: 3vw 3vh;

  @media (max-width: 740px) {
    width: 6vw;
    height: 4vh;
    right: 8vw;
    top: 1vh;
    background-size: 6vw 4vh;
  }
`;
/* 투두 리스트 버튼 텍스트(do,edit,del) */
const ButtonText = styled.div`
  font-size: 0.1vh;
  font-weight: bold;
  text-align: center;
  color: #ff9be6;
`;

/* 투두 리스트 글 */
const Todo = styled.div`
  width: 38vw;
  height: 4vh;
  position: absolute;
  left: 5.5vw;
  top: 0.3vh;

  color: #1a1a1a;
  font-size: 2vh;
  line-height: 4vh;
  text-decoration: ${({ $decoration }) =>
    $decoration === "completed" ? "line-through" : "none"};

  @media (max-width: 740px) {
    left: 8vw;
    top: 0.8vh;
    font-size: 2.5vh;
  }
`;

/* 투두 리스트가 추가될 시 추가되는 박스 */
const ListBox = styled.li`
  width: 58.5vw;
  height: 5vh;
  margin: 1vh auto;
  position: relative;

  background-color: white;
  border-radius: 2.5vh;

  @media (max-width: 740px) {
    width: 85vw;
    height: 6vh;
  }
`;

/* 리스트 컴포넌트 */
function List({ todoList, onComplete, onRemove, onUpdate }) {

  return todoList.map((item, index) => {
    return (
      <ListBox key={item.key}>
        <Check
          type="button"
          onClick={() => {
            if (typeof onComplete === "function") {
              onComplete(item, index);
            }
          }}>
            <ButtonText>do</ButtonText>
        </Check>
        <Todo $decoration={item.isCompleted ? "completed" : ""}>
          {item.value}
        </Todo>
        <Update
          type="button"
          onClick={() => {
            if (typeof onUpdate === "function") {
              onUpdate(index);
            }
          }}>
          <ButtonText>edit</ButtonText>
        </Update>
        <Remove
          type="button"
          onClick={() => {
            if (typeof onRemove === "function") {
              onRemove(index);
            }
          }}>
           <ButtonText>del</ButtonText> 
        </Remove>
      </ListBox>
    );
  });
}

export default List;
