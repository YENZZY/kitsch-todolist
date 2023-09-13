import styled from "styled-components";

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

/* 플레이리스트가 추가될 공간 */
const Container = styled.div`
  position: absolute;
  width: 64.3vw;
  height: 44vh;
  overflow-y: scroll;
  top: 4vh;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;

  @media (max-width: 740px) {
    width: 90vw;
    height: 68vh;
    z-index: 20;
    top: 0;
  }
`;

/* 플레이리스트 */
const Music = styled.iframe`
  width: 340px;
  height: 176px;
  margin: 15px;
  border-radius: 5px;

  @media (max-width: 1176px) {
    width: 480px;
    height: 250px;
    margin: 30px;
  }

  @media (max-width: 740px) {
    width: 480px;
    height: 300px;
  }
`;

/* 플레이리스트 화면 컴포넌트 */
function PlaylistDisplay() {
  return (
    <Page>
      <Container>
        <Music
          src="https://www.youtube.com/embed/s5_ImWoG8rA?si=j0AVGB99MjXHK40b"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></Music>
        <Music
          src="https://www.youtube.com/embed/4JxpKWBGALI?si=fzE9QxzlUcZFELEb"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></Music>
        <Music
          src="https://www.youtube.com/embed/fX5kzVuOI80?si=L1SeISpDFkIfHaiM"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></Music>
        <Music
          src="https://www.youtube.com/embed/M-hwJW4KLVo?si=QCB7h1ma9_8X_Kn4"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></Music>
        <Music
          src="https://www.youtube.com/embed/XSKxJ7BpTyo?si=5SYVt-6SeJHDw8xd"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></Music>
        <Music
          src="https://www.youtube.com/embed/YFo8Py1YypA?si=JaPVgvABmWGK-6na"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></Music>
      </Container>
    </Page>
  );
}

export default PlaylistDisplay;
