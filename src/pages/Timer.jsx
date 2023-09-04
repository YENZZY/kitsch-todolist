import Device from "../components/Device";
import TimerDisplay from "../components/TimerDisplay";
import background from "../image/bg.gif";

/* 타이머 페이지 */
function Timer() {
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
      <TimerDisplay></TimerDisplay>
    </div>
  );
}

export default Timer;
