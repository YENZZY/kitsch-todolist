import styled from "styled-components";
import playlist_img from "../../image/playlist_img.png";

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

/* 플레이 리스트 배너*/
const PlaylistText = styled.div`
  position: absolute;
  top: -4vh;
  left: 24.5vw;
  color: white;
  font-size: 3vh;
  font-weight: bold;
`;

/* 플레이 리스트 샘플*/
const PlaylistImg = styled.div`
  width: 46vw;
  height: 43.5vh;
  position: absolute;
  top: 4.6vh;
  left: 9vw;

  background-image: url(${playlist_img});
  background-repeat: no-repeat;
  background-size: 46vw 43.5vh;
`;

/* 플레이리스트 화면 컴포넌트 */
function PlaylistDisplay() {
  return (
    <Page>
      {/* <PlaylistText>play list</PlaylistText> */}
      <PlaylistImg />
    </Page>
  );
}

export default PlaylistDisplay;