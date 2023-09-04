import Device from "../components/Device";
import TodoDisplay from "../components/TodoDisplay";
import background from "../image/bg.gif";

/* 투두 리스트 페이지 */
function Todo() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        backgroundImage: `url(${background})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "100vw 100vh",

        margin: "0",
        padding: "0",
      }}
    >
      <Device />
      <TodoDisplay></TodoDisplay>
    </div>
  );
}

export default Todo;
