import styled from "styled-components";
import playlist_img from "../../image/playlist_img.png";

const Page = styled.div`
  width: 90vw;
  height: 68vh;
  position: absolute;
  z-index: 20;
  top: 11vh;
  left: 6.5vw;
`;

/* 플레이 리스트 샘플*/
const PlaylistImg = styled.div`
  width: 90vw;
  height: 68vh;
  position: absolute;

  background-image: url(${playlist_img});
  background-repeat: no-repeat;
  background-size: 90vw 68vh;
`;

/* 플레이리스트 화면 컴포넌트 */
function MobilePlaylist() {
  return (
    <Page>
      {/* <PlaylistText>play list</PlaylistText> */}
      <PlaylistImg />
    </Page>
  );
}

export default MobilePlaylist;
