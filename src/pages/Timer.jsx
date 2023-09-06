import Device from "../components/PC/Device";
import TimerDisplay from "../components/PC/TimerDisplay";
import background from "../image/bg.gif";
import { Mobile, PC } from "../components/Media";
import MobilePage from "../components/Mobile/MobilePage";
import MobileTimer from "../components/Mobile/MobileTimer";

/* 타이머 페이지 */
function Timer() {
  return (
    <>
      <Mobile>
        <MobilePage />
        <MobileTimer />
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
          <TimerDisplay></TimerDisplay>
        </div>
      </PC>
    </>
  );
}

export default Timer;
