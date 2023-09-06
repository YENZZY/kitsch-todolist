import styled from "styled-components";
import MobileList from "./MobileList";
import MobileInsertForm from "./MobileInsertForm";
import MobileUpdateForm from "./MobileUpdateForm";
import { useState } from "react";

const Page = styled.div`
  width: 90vw;
  height: 68vh;
  position: absolute;
  z-index: 20;
  top: 11vh;
  left: 6.5vw;
`;

/* 할 일 목록이 추가되는 공간 */
const Lists = styled.ul`
  width: 95vw;
  height: 60vh;
  overflow-y: scroll;
  list-style-type: none;

  margin: 1vh 0;
  padding: 0;

  position: absolute;
  top: 8vh;
`;

function MobileTodo() {
  const [todoList, setTodoList] = useState([]); //투두리스트 목록
  const [preTodo, setPreTodo] = useState({}); // 수정 버튼 클릭 시 이전 내용 불러옴

  const handleInsert = (value) => {
    //투두 리스트 작성
    setTodoList((current) => {
      const newlist = [...current];
      newlist.push({
        key: new Date().getTime(),
        value,
        isCompleted: false,
      });
      return newlist;
    });
  };

  const handleComplete = (item, index) => {
    // 완료된 투두 처리
    let check = false;
    if (item.isCompleted === false) {
      check = true;
    }
    setTodoList((current) => {
      const newList = [...current];
      newList[index].isCompleted = check;
      return newList;
    });
  };

  const handleUpdate = (index) => {
    //수정 버튼 클릭 시 preTodo에 해당 key, value 값 저장, 해당 값은 UpdateForm으로
    setPreTodo({ key: todoList[index].key, value: todoList[index].value });
  };

  const handleSaveUpdate = (value, key) => {
    //UpdateForm에서 제출 시 수정된 내용 반영
    setPreTodo({});
    const updatedTodo = {
      key,
      value,
      isCompleted: false,
    };
    setTodoList((current) => {
      const newList = [...current];
      const todoIndex = newList.findIndex((item) => {
        return item.key === updatedTodo.key;
      });
      newList[todoIndex] = updatedTodo;
      return newList;
    });
  };

  const handleRemove = (index) => {
    // 투두 삭제
    setTodoList((current) => {
      const newList = [...current];
      newList.splice(index, 1);
      return newList;
    });
  };
  /* 수정할 내용 있음에 따라 조건부 렌더링*/
  return (
    <Page>
      {!preTodo.value && <MobileInsertForm onInsert={handleInsert} />}
      {preTodo.value && (
        <MobileUpdateForm preTodo={preTodo} onSave={handleSaveUpdate} />
      )}
      <Lists>
        <MobileList
          todoList={todoList}
          onComplete={handleComplete}
          onRemove={handleRemove}
          onUpdate={handleUpdate}
        />
      </Lists>
    </Page>
  );
}

export default MobileTodo;