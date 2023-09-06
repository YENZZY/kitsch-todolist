import Device from "../components/PC/Device";
import PlaylistDisplay from "../components/PC/PlaylistDisplay";
import background from "../image/bg.gif";
import { Mobile, PC } from "../components/Media";
import MobilePage from "../components/Mobile/MobilePage";
import MobilePlaylist from "../components/Mobile/MobilePlaylist";

/* 플레이리스트 페이지 */
function Playlist() {
  return (
    <>
      <Mobile>
        <MobilePage />
        <MobilePlaylist />
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
          <PlaylistDisplay></PlaylistDisplay>
        </div>
      </PC>
    </>
  );
}

export default Playlist;
