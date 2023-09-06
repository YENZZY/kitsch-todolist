import styled from "styled-components";
import playlist_img from "../image/playlist_img.png";

/* 각 페이지마다 바뀌는 실질적인 공간 */
const Page = styled.div`
  width: 54.9vw;
  height: 39.5vh;
  z-index: 5;
  opacity: 1;
  position: absolute;
  top: 17.7vh;
  left: 22.5vw;
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
  width: 37vw;
  height: 34.5vh;
  position: absolute;
  top: 4.6vh;
  left: 9vw;

  background-image: url(${playlist_img});
  background-repeat: no-repeat;
  background-size: 37vw 34.5vh;
`;

/* 플레이리스트 화면 컴포넌트 */
function PlaylistDisplay() {
  return (
    <Page>
      <PlaylistText>play list</PlaylistText>
      <PlaylistImg />
    </Page>
  );
}

export default PlaylistDisplay;
