import styled from "styled-components";
import heart from "../../image/todo_cloud.png";
import timer_star from "../../image/timer_star.png";
import { useEffect, useState } from "react";

/* 각 페이지마다 바뀌는 실질적인 공간 */
const Page = styled.div`
  width: 64.3vw;
  height: 48vh;
  z-index: 5;
  opacity: 1;
  position: absolute;
  top: 10.1vh;
  left: 2.8vw;

  @media (max-width: 740px) {
    width: 90vw;
    height: 68vh;
    z-index: 20;
    top: 11vh;
    left: 6.5vw;
  }
`;

/* 타이머 원 */
const TimerCircle = styled.div`
  position: absolute;
  width: 20vw;
  height: 30vh;
  top: 8vh;
  left: 21.5vw;
  background-color: transparent;
  border: 2vh solid #eccef5;
  border-radius: 50%;

  @media (max-width: 740px) {
    width: 50vw;
    height: 40vh;
    top: 13vh;
    left: 18vw;
  }
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

  @media (max-width: 740px) {
    width: 7vw;
    height: 6vh;
    top: 10vh;
    left: 42vw;
    background-size: 7vw 6vh;
  }
`;

/* 타이머 시간*/
const TimerTime = styled.div`
  position: absolute;
  top: 17.3vh;
  left: 22.6vw;
  width: 20vw;
  text-align: center;
  color: white;
  font-size: 10vh;
  font-weight: bold;

  @media (max-width: 740px) {
    top: 25vh;
    left: 23.5vw;
    width: 40vw;
    font-size: 17vw;
  }
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

  @media (max-width: 740px) {
    top: 45vh;
    left: 34vw;
    width: 10vw;
    height: 7vh;
    background-size: 10vw 7vh;
    font-size: 2.7vh;
    line-height: 7vh;
  }
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

  @media (max-width: 740px) {
    top: 45vh;
    left: 48vw;
    width: 10vw;
    height: 7vh;
    background-size: 10vw 7vh;
    font-size: 2.7vh;
    line-height: 6vh;
  }
`;

const TimerCount = styled.div`
  position: absolute;
  top: 13vh;
  left: 22.6vw;
  width: 20vw;
  text-align: center;
  color: white;
  font-size: 3vh;
  font-weight: bold;
  div {
    display: inline-block;
    padding: 0 0.2vw;
  }

  @media (max-width: 740px) {
    top: 18vh;
    left: 25.5vw;
    width: 40vw;
    font-size: 6vw;
  }
`;

const TIMER_LIMIT = 20 * 60;
const TIMER_SPEED = 1;

/* 타이머 화면 컴포넌트 */
function TimerDisplay() {
  // state values
  const [times, setTimes] = useState(localStorage.getItem("TimerTimes"));
  const [round, setRound] = useState(
    Number(localStorage.getItem("TimerRound"))
  );
  const [goal, setGoal] = useState(Number(localStorage.getItem("TimerGoal")));
  if (times === null || round === null || goal === null) {
    setTimes(TIMER_LIMIT);
    // setTimes(TIMER_LIMIT);
    setGoal(1);
    setRound(1);
  }
  const [play, setPlay] = useState(false);

  function saveTimerInfo() {
    localStorage.setItem("TimerTimes", times + "");
    localStorage.setItem("TimerRound", round + "");
    localStorage.setItem("TimerGoal", goal + "");
  }

  // eventListener
  const onPlay = () => {
    setPlay(true);
    saveTimerInfo();
  };
  const onStop = () => {
    setPlay(false);
    saveTimerInfo();
  };
  const countRound = () => {
    if (round < 4) {
      setRound((current) => current + 1);
    } else {
      setRound(1);
      goal < 12 ? setGoal((current) => current + 1) : setGoal(1);
    }
    saveTimerInfo();
  };

  // 타이머 기능
  useEffect(() => {
    let timerId;

    if (play) {
      timerId = setInterval(() => {
        if (times !== 0) {
          setTimes((prev) => prev - 1);
          saveTimerInfo();
        }
        // console.log(times);
        if (times === 0) {
          setPlay(false);
          countRound();
          setTimes(TIMER_LIMIT);
        }
      }, TIMER_SPEED);
    }
    return () => {
      clearInterval(timerId);
      saveTimerInfo();
    };
  });

  return (
    <Page>
      {/* <TimerText>timer</TimerText> */}
      <TimerCircle />
      <TimerStar />
      <TimerCount>
        <div>
          <div style={{ display: "block", fontSize: "2vh" }}>Round</div>
          <div style={{ display: "block" }}>{round}/4</div>
        </div>
        <div>
          <div style={{ display: "block", fontSize: "2vh" }}>Goal</div>
          <div style={{ display: "block" }}>{goal}/12</div>
        </div>
      </TimerCount>
      <TimerTime>
        {(parseInt(times / 60) + "").padStart(2, "0")}:
        {((times % 60) + "").padStart(2, "0")}
      </TimerTime>
      <TimerStart onClick={onPlay}>start</TimerStart>
      <TimerStop onClick={onStop}>stop</TimerStop>
    </Page>
  );
}

export default TimerDisplay;
