import styled from 'styled-components';
import heart from '../../image/todo_cloud.png';
import timer_star from '../../image/timer_star.png';
import { useEffect, useState } from 'react';

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
// const TimerText = styled.div`
//   position: absolute;
//   top: -5vh;
//   left: 29vw;
//   color: white;
//   font-size: 3vh;
//   font-weight: bold;
// `;

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
  top: 17.3vh;
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
`;

const TIMER_LIMIT = 20 * 60;

/* 타이머 화면 컴포넌트 */
function TimerDisplay() {
  // state values
  const [times, setTimes] = useState(60);
  // const [times, setTimes] = useState(TIMER_LIMIT);
  const [round, setRound] = useState(0);
  const [goal, setGoal] = useState(0);
  const [play, setPlay] = useState(false);

  // eventListener
  const onPlay = () => {
    setPlay(true);
    if (round === 4) {
      setRound(0);
      setGoal((current) => current + 1);
    }
  };
  const onStop = () => {
    setPlay(false);
  };
  const countRound = () => {
    if (round < 4) {
      setRound((current) => current + 1);
    } else {
      setRound(0);
      goal < 12 ? setGoal((current) => current + 1) : setGoal(0);
    }
  };

  // 타이머 기능
  useEffect(() => {
    let timerId;

    if (play) {
      timerId = setInterval(() => {
        if (times !== 0) setTimes((prev) => prev - 1);
        console.log(times);
        if (times === 0) {
          setPlay(false);
          countRound();
          setTimes(60);
        }
      }, 10);
    }
    return () => {
      clearInterval(timerId);
    };
  });

  return (
    <Page>
      {/* <TimerText>timer</TimerText> */}
      <TimerCircle />
      <TimerStar />
      <TimerCount>
        <div>
          <div style={{ display: 'block', fontSize: '2vh' }}>Round</div>
          <div style={{ display: 'block' }}>{round}/4</div>
        </div>
        <div>
          <div style={{ display: 'block', fontSize: '2vh' }}>Goal</div>
          <div style={{ display: 'block' }}>{goal}/12</div>
        </div>
      </TimerCount>
      <TimerTime>
        {parseInt(times / 60)}:{String(times % 60).padStart(2, '0')}
      </TimerTime>
      <TimerStart onClick={onPlay}>start</TimerStart>
      <TimerStop onClick={onStop}>stop</TimerStop>
    </Page>
  );
}

export default TimerDisplay;
