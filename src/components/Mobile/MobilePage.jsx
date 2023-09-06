import styled from "styled-components";
import background from "../../image/bg.gif";
import cloud from "../../image/cloud.png";
import MobileButton from "./MobileButton";

const Cloud = styled.div`
  width: 100vw;
  height: 120vh;
  top: -8vh;
  position: absolute;
  background: url(${cloud}) no-repeat;
  background-size: 100vw 120vh;
`;

const Page = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #fcd7ee;
  position: relative;
  z-index: 10;
  opacity: 0.6;
`;

const Header = styled.div`
  width: 100vw;
  height: 8vh;
  background-color: #ff9eda;
  position: absolute;
  font-size: 3vh;
  text-align: center;
  color: white;
  line-height: 8vh;
`;

const Device = styled.div`
  width: 25vw;
  height: 1vh;
  background-color: #ff9eda;
`;

function MobilePage() {
  // 현재 날짜를 가져오는 함수
  const getCurrentDate = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, "0"); // 월을 두 자리 숫자로 포맷팅
    const day = String(today.getDate()).padStart(2, "0"); // 일을 두 자리 숫자로 포맷팅
    return `${year}.${month}.${day}`;
  };
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
        overflow: "hidden",
      }}
    >
      <Cloud />
      <Page>
        <Header>{getCurrentDate()}</Header>
      </Page>
      <MobileButton />
    </div>
  );
}

export default MobilePage;
