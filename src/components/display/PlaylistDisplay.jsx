import styled from "styled-components";
import playlist_img from "../../image/playlist_img.png";

/* 각 페이지마다 바뀌는 실질적인 공간 */
const Page = styled.div`
  width: 64.3vw;
  height: 48vh;
  z-index: 5;
  opacity: 1;
  position: absolute;
  top: 10.1vh;
  left: 2.8vw;

  @media (max-width: 740px) {
    width: 90vw;
    height: 68vh;
    z-index: 20;
    top: 11vh;
    left: 6.5vw;
  }
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

  @media (max-width: 740px) {
    width: 90vw;
    height: 68vh;
    top: 0;
    left: 0;
    background-size: 90vw 68vh;
  }
`;

/* 플레이리스트 화면 컴포넌트 */
function PlaylistDisplay() {
  return (
    <Page>
      <PlaylistImg />
    </Page>
  );
}

export default PlaylistDisplay;
