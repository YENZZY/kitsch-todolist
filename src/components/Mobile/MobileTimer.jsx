import styled from "styled-components";
import heart from "../../image/todo_cloud.png";
import timer_star from "../../image/timer_star.png";

const Page = styled.div`
  width: 90vw;
  height: 68vh;
  position: absolute;
  z-index: 20;
  top: 11vh;
  left: 6.5vw;
`;

/* 타이머 원 */
const TimerCircle = styled.div`
  position: absolute;
  width: 50vw;
  height: 40vh;
  top: 13vh;
  left: 18vw;
  background-color: transparent;
  border: 2vh solid #eccef5;
  border-radius: 50%;
`;

/*타이머 별*/
const TimerStar = styled.div`
  position: absolute;
  width: 7vw;
  height: 6vh;
  top: 10vh;
  left: 42vw;
  background: url(${timer_star}) no-repeat;
  background-size: 7vw 6vh;
`;

/* 타이머 시간*/
const TimerTime = styled.div`
  position: absolute;
  top: 25vh;
  left: 25.5vw;
  width: 40vw;
  text-align: center;
  color: white;
  font-size: 10vh;
  font-weight: bold;
`;

/*타이머 start 버튼*/
const TimerStart = styled.button`
  position: absolute;
  top: 38vh;
  left: 34vw;
  width: 10vw;
  height: 7vh;
  cursor: pointer;
  margin: 0;
  padding: 0;

  filter: opacity(0.7) drop-shadow(0 0 0 #93daff);

  background: url(${heart}) no-repeat;
  background-size: 10vw 7vh;
  background-position: center;
  border: none;

  font-size: 2.7vh;
  font-weight: bold;
  text-align: center;
  line-height: 7vh;
  color: #73e1e1;
`;

/*타이머 stop 버튼*/
const TimerStop = styled.div`
  position: absolute;
  top: 38vh;
  left: 48vw;
  width: 10vw;
  height: 7vh;
  cursor: pointer;
  margin: 0;
  padding: 0;

  filter: opacity(0.7) drop-shadow(0 0 0 #ff1493);

  background: url(${heart}) no-repeat;
  background-size: 10vw 7vh;
  background-position: center;
  border: none;

  font-size: 2.7vh;
  font-weight: bold;
  text-align: center;
  line-height: 6vh;
  color: #ff9be6;
`;

/* 타이머 화면 컴포넌트 */
function MobileTimer() {
  return (
    <Page>
      {/* <TimerText>timer</TimerText> */}
      <TimerCircle />
      <TimerStar />
      <TimerTime>00:00</TimerTime>
      <TimerStart>start</TimerStart>
      <TimerStop>stop</TimerStop>
    </Page>
  );
}

export default MobileTimer;
