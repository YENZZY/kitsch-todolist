import Device from "../components/Device";
import MainDisplay from "../components/MainDisplay";
import background from "../image/bg.gif";

/* 메인 페이지 */
function Main() {
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
      <MainDisplay></MainDisplay>
    </div>
  );
}

export default Main;
