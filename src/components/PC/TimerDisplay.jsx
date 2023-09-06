import styled from "styled-components";
import heart from "../../image/todo_cloud.png";
import timer_star from "../../image/timer_star.png";

/* 각 페이지마다 바뀌는 실질적인 공간 */
const Page = styled.div`
  width: 64.3vw;
  height: 48vh;
  z-index: 5;
  opacity: 1;
  position: absolute;
  top: 12vh;
  left: 17.8vw;
`;

/* 타이머 배너*/
const TimerText = styled.div`
  position: absolute;
  top: -5vh;
  left: 29vw;
  color: white;
  font-size: 3vh;
  font-weight: bold;
`;

/* 타이머 원 */
const TimerCircle = styled.div`
  position: absolute;
  width: 17vw;
  height: 30vh;
  top: 8vh;
  left: 23vw;
  background-color: transparent;
  border: 2vh solid #eccef5;
  border-radius: 50%;
`;

/*타이머 별*/
const TimerStar = styled.div`
  position: absolute;
  width: 4vw;
  height: 6vh;
  top: 6vh;
  left: 30.5vw;
  background: url(${timer_star}) no-repeat;
  background-size: 4vw 6vh;
`;

/* 타이머 시간*/
const TimerTime = styled.div`
  position: absolute;
  top: 17vh;
  left: 22.6vw;
  width: 20vw;
  text-align: center;
  color: white;
  font-size: 10vh;
  font-weight: bold;
`;

/*타이머 start 버튼*/
const TimerStart = styled.button`
  position: absolute;
  top: 29vh;
  left: 26.5vw;
  width: 6vw;
  height: 7vh;
  cursor: pointer;
  margin: 0;
  padding: 0;

  filter: opacity(0.7) drop-shadow(0 0 0 #93daff);

  background: url(${heart}) no-repeat;
  background-size: 5vw 6.5vh;
  background-position: center;
  border: none;

  font-size: 2.5vh;
  font-weight: bold;
  text-align: center;
  line-height: 6vh;
  color: #73e1e1;
`;

/*타이머 stop 버튼*/
const TimerStop = styled.div`
  position: absolute;
  top: 29vh;
  left: 32.5vw;
  width: 6vw;
  height: 7vh;
  cursor: pointer;
  margin: 0;
  padding: 0;

  filter: opacity(0.7) drop-shadow(0 0 0 #ff1493);

  background: url(${heart}) no-repeat;
  background-size: 5vw 6.5vh;
  background-position: center;
  border: none;

  font-size: 2.5vh;
  font-weight: bold;
  text-align: center;
  line-height: 6vh;
  color: #ff9be6;
`;

/* 타이머 화면 컴포넌트 */
function TimerDisplay() {
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

export default TimerDisplay;
