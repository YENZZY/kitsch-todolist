import Device from "../components/Device";
import PlaylistDisplay from "../components/PlaylistDisplay";
import background from "../image/bg.gif";

/* 플레이리스트 페이지 */
function Playlist() {
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
      <PlaylistDisplay></PlaylistDisplay>
    </div>
  );
}

export default Playlist;
