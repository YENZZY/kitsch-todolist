import styled from "styled-components";

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

/* 메인 화면 컴포넌트 */
function MainDisplay() {
  return <Page></Page>;
}

export default MainDisplay;
