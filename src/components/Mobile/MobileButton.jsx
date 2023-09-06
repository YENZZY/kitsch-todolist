import styled from "styled-components";
import todo from "../../image/button/todo.png";
import timer from "../../image/button/timer.png";
import playlist from "../../image/button/playlist.png";
import { useNavigate } from "react-router-dom";

/* 탭 메뉴 공간 */
const TabMenu = styled.div`
  width: 80vw;
  height: 13vh;
  background-color: #ff9eda;
  border-radius: 2vh;
  opacity: 0.4;

  z-index: 10;
  position: absolute;
  margin: 0 10vw;
  bottom: 4vh;
`;

/* todolist 버튼 */
const TodoList = styled.button`
  width: 10vw;
  height: 8vh;
  z-index: 10;
  position: absolute;
  bottom: 6.5vh;
  left: 30vw;

  cursor: pointer;

  background: url(${todo}) no-repeat;
  background-size: 10vw 8vh;
  border: none;

  &:hover {
    transform: scale(1.3);
    transition: transform 0.8s;
  }
`;

/* timer 버튼 */
const Timer = styled.button`
  width: 10vw;
  height: 8vh;
  z-index: 10;
  position: absolute;
  bottom: 6.5vh;
  left: 47vw;

  cursor: pointer;

  background: url(${timer}) no-repeat;
  background-size: 10vw 8vh;
  border: none;

  &:hover {
    transform: scale(1.3);
    transition: transform 0.8s;
  }
`;

/* playlist 버튼 */
const Playlist = styled.button`
  width: 10vw;
  height: 8vh;
  z-index: 10;
  position: absolute;
  bottom: 6.5vh;
  right: 24vw;

  cursor: pointer;

  background: url(${playlist}) no-repeat;
  background-size: 10vw 8vh;
  border: none;

  &:hover {
    transform: scale(1.3);
    transition: transform 0.8s;
  }
`;

/* 버튼 컴포넌트 */
function Button() {
  const navigate = useNavigate();

  /* 각 버튼 클릭시 페이지 이동 */
  const goTodo = () => {
    navigate("/todo");
  };

  const goTimer = () => {
    navigate("/timer");
  };

  const goPlaylist = () => {
    navigate("/playlist");
  };

  return (
    <>
      <TabMenu />
      <TodoList onClick={goTodo} />
      <Timer onClick={goTimer} />
      <Playlist onClick={goPlaylist} />
    </>
  );
}

export default Button;
