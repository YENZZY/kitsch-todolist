import React from "react";
import cloud from "../../image/cloud.png";
import mac from "../../image/mac.png";
import page from "../../image/page.png";
import styled from "styled-components";
import Button from "./Buttons";

/* 배경 구름 */
const Cloud1 = styled.div`
  width: 60vw;
  height: 90vh;
  display: inline-block;
  background-image: url(${cloud});
  background-repeat: no-repeat;
  background-size: 60vw 90vh;
  position: absolute;
  top: 20vh;
  right: 50vw;
`;
const Cloud2 = styled.div`
  width: 50vw;
  height: 80vh;
  display: inline-block;
  background-image: url(${cloud});
  background-repeat: no-repeat;
  background-size: 50vw 80vh;
  transform: scaleX(-1);
  position: absolute;
  top: 0;
  left: 55vw;
`;

/* 맥 장치 */
const Mac = styled.div`
  width: 70vw;
  height: 96vh;
  position: absolute;
  top: 2vh;
  left: 15vw;
  background-image: url(${mac});
  background-repeat: no-repeat;
  background-size: 70vw 98vh;
  background-position: 0 0;
`;

/* 맥 화면 */
const HomePage = styled.div`
  width: 64.3vw;
  height: 58.1vh;
  position: absolute;
  top: 4.6vh;
  left: 2.8vw;

  background-image: url(${page});
  background-repeat: no-repeat;
  background-size: 65vw 58.1vh;
  opacity: 0.7;
`;

/* 날짜 표시 */
const DateContainer = styled.div`
  width: 10vw;
  height: 4vh;
  margin: 0;
  padding: 0;
  position: absolute;
  top: 5.5vh;
  right: 7vw;

  font-size: 2vh;
  text-align: center;
  line-height: 4vh;
  color: white;
`;

/* 장치 컴포넌트 */
function Device() {
  // 현재 날짜를 가져오는 함수
  const getCurrentDate = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, "0"); // 월을 두 자리 숫자로 포맷팅
    const day = String(today.getDate()).padStart(2, "0"); // 일을 두 자리 숫자로 포맷팅
    return `${year}.${month}.${day}`;
  };

  return (
    <>
      <Cloud1 />
      <Cloud2 />
      <Mac>
        <HomePage />
        <DateContainer>{getCurrentDate()}</DateContainer> {/* 현재 날짜 표시 */}
        <Button />
      </Mac>
    </>
  );
}

export default Device;
