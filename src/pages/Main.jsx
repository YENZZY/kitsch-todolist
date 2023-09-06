import Device from "../components/PC/Device";
import MainDisplay from "../components/PC/MainDisplay";
import background from "../image/bg.gif";
import { Mobile, PC } from "../components/Media";
import MobilePage from "../components/Mobile/MobilePage";
import MobileMain from "../components/Mobile/MobileMain";

/* 메인 페이지 */
function Main() {
  return (
    <>
      <Mobile>
        <MobilePage />
        <MobileMain />
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
          <MainDisplay></MainDisplay>
        </div>
      </PC>
    </>
  );
}

export default Main;
