import styled from "styled-components";
import timer_star from "../image/timer_star.png";

/* 각 페이지마다 바뀌는 실질적인 공간 */
const Page = styled.div`
  width: 54.9vw;
  height: 39.5vh;
  z-index: 5;
  opacity: 1;
  position: absolute;
  top: 17.7vh;
  left: 22.5vw;
`;

/* 타이머 배너*/
const TimerText = styled.div`
  position: absolute;
  top: -4vh;
  left: 25.5vw;
  color: white;
  font-size: 3vh;
  font-weight: bold;
`;

/* 타이머 원 */
const TimerCircle = styled.div`
  position: absolute;
  width: 14vw;
  height: 26vh;
  top: 7vh;
  left: 19.5vw;
  background-color: transparent;
  border: 2vh solid #ECCEF5;
  border-radius: 100vh; 
`

/*타이머 별*/
const TimerStar = styled.div`
  position: absolute;
  width: 4vw;
  height: 7vh;
  top: 4vh;
  left: 25.5vw;
  background: url(${timer_star}) no-repeat;
  background-size: contain;
`

/* 타이머 시간*/
const TimerTime = styled.div`
  position: absolute;
  top: 13vh;
  left: 22vw;
  color: white;
  font-size: 8.5vh;
  font-weight: bold;
`;

/*타이머 start 버튼*/
const TimerStart = styled.div`
  position: absolute;
  top: 25vh;
  left: 22vw;
  width: 5vw;
  height: 3.5vh;
  border-radius: 1vh;
  background-color: #CEECF5;

  font-size: 2.5vh;
  font-weight: bold;
  text-align: center;
  line-height: 2.6vh;
  color: white;
`
/*타이머 stop 버튼*/
const TimerStop = styled.div`
  position: absolute;
  top: 25vh;
  left: 28vw;
  width: 5vw;
  height: 3.5vh;
  border-radius: 1vh;
  background-color: #F6CED8;

  font-size: 2.5vh;
  font-weight: bold;
  text-align: center;
  line-height: 2.6vh;
  color: white;
`

/* 타이머 화면 컴포넌트 */
function TimerDisplay() {
  return <Page>
            <TimerText>timer</TimerText>
              <TimerCircle/>
              <TimerStar/>
              <TimerTime>00:00</TimerTime>
              <TimerStart>start</TimerStart>
              <TimerStop>stop</TimerStop>
          </Page>;
}

export default TimerDisplay;
