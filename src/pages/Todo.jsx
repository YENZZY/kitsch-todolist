import Device from "../components/PC/Device";
import TodoDisplay from "../components/PC/TodoDisplay";
import background from "../image/bg.gif";
import { Mobile, PC } from "../components/Media";
import MobilePage from "../components/Mobile/MobilePage";
import MobileTodo from "../components/Mobile/MobileTodo";

/* 투두 리스트 페이지 */
function Todo() {
  return (
    <>
      <Mobile>
        <MobilePage />
        <MobileTodo />
      </Mobile>
      <PC>
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
      </PC>
    </>
  );
}

export default Todo;
