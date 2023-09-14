import React from 'react';
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
    top: 18vh;
    left: 16.5vw;
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

/* 플레이 리스트 샘플
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
*/

  /*유튜브 영상 링크 */
  const Playlist = [
    {/*유튜브 영상 1 */
      videoId: "f3m_WqxhL4o",
      
    },
    {/*유튜브 영상 2 */
      videoId: "HlEY65BQDI4",
      
    },
    {/*유튜브 영상 3 */
      videoId: "8vC1i9NgOoo",
      
    },
    {/*유튜브 영상 4 */
      videoId: "x6i3_LfeTjY",
    
    }
  ];

const VideoContainer = styled.div`
  display: flex;
  flex-wrap: wrap;

`;

const VideoWrapper = styled.div`
  width: calc(50% - 16px);
  box-sizing: border-box;
  margin-top: ${(props) => (props.isFirstRow ? '5.5vh' : '0')};
  
  div {
    width: 30vw;
    height: 21vh;
    margin-left:1.5vw;

    iframe {
      width: 30vw;
      height: 20vh;
      border-radius: 0.8vw;
    }
  }
  @media (max-width: 740px) {
    
    /* 상단 두 개의 비디오에 대한 스타일 */
    &:nth-child(-n + 2) {
      margin-bottom: 5vh; /* 상단 두 개와 하단 두 개 간의 간격 조절 */
    }
    &:nth-child(2), &:nth-child(4) {
      margin-left: -5vw; /* 1번과 3번 영상에만 margin-left 적용 */
    }
  }
`;

/* 플레이리스트 화면 컴포넌트 */
function PlaylistDisplay() {
  return (
    <Page>
      <VideoContainer>
        {Playlist.map((video, index) => (
          <VideoWrapper
            key={index}
            isFirstRow={index === 0 || index === 1}
            isFirstColumn={index === 0 || index === 2}
          >
            <div>
              <iframe
                src={`https://www.youtube.com/embed/${video.videoId}`}
                allowFullScreen
              ></iframe>
            </div>
          </VideoWrapper>
        ))}
      </VideoContainer>
    </Page>
  );
}

export default PlaylistDisplay;
