import styled from "styled-components";
import todo from "../../image/button/todo.png";
import timer from "../../image/button/timer.png";
import playlist from "../../image/button/playlist.png";
import { useNavigate } from "react-router-dom";

/* 탭 메뉴 공간 */
const TabMenu = styled.div`
  width: 17vw;
  height: 7vh;
  z-index: 10;
  position: absolute;
  right: 5vw;
  bottom: 20vh;
`;

/* todolist 버튼 */
const TodoList = styled.button`
  width: 5vw;
  height: 7vh;
  z-index: 10;
  position: absolute;

  cursor: pointer;

  background: url(${todo}) no-repeat;
  background-size: 5vw 7vh;
  border: none;
`;

/* timer 버튼 */
const Timer = styled.button`
  width: 5vw;
  height: 7vh;
  z-index: 10;
  position: absolute;
  left: 6vw;

  cursor: pointer;

  background: url(${timer}) no-repeat;
  background-size: 5vw 7vh;
  border: none;
`;

/* playlist 버튼 */
const Playlist = styled.button`
  width: 5vw;
  height: 7vh;
  z-index: 10;
  position: absolute;
  right: 0;

  cursor: pointer;

  background: url(${playlist}) no-repeat;
  background-size: 5vw 7vh;
  border: none;
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
    <TabMenu>
      <TodoList onClick={goTodo} />
      <Timer onClick={goTimer} />
      <Playlist onClick={goPlaylist} />
    </TabMenu>
  );
}

export default Button;
