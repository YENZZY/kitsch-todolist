import styled, { css, keyframes } from "styled-components";
import { useNavigate } from "react-router-dom";
import background from "../../image/loading1.gif";
import { useMediaQuery } from "react-responsive";

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

const GifBg = styled.div`
  width: 64.2vw;
  height: 43.8vh;
  position: absolute;
  top: 4.5vh;
  left: 0.1vw;
  background: url(${background}) no-repeat;
  background-size: 64.2vw 43.8vh;
`;

const Title = styled.div`
  width: 55vw;
  position: absolute;
  top: 20vh;
  left: 14vw;

  @media (max-width: 740px) {
    width: 90vw;
    top: 26vh;
    left: 10vw;
  }
`;

const bounce = keyframes`
  100% {
    top: -20px;
    text-shadow: 0 1px 0 #fc60c1,
                0 2px 0 #fc60c1,
                0 3px 0 #fc60c1,
                0 4px 0 #fc60c1,
                0 5px 0 #fc60c1,
                0 6px 0 #fc60c1,
                0 7px 0 #fc60c1,
                0 8px 0 #fc60c1,
                0 9px 0 #fc60c1,
                0 50px 25px rgba(0, 0, 0, .2);
  }
`;

const Words = styled.span`
  position: relative;
  display: inline-block;
  animation: ${bounce} 0.3s ease infinite alternate;
  font-family: "Rubik Iso", cursive;
  font-size: 10vw;
  color: #ffc2e8;
  text-shadow: 0 1px 0 #fc60c1, 0 2px 0 #fc60c1, 0 3px 0 #fc60c1,
    0 4px 0 #fc60c1, 0 5px 0 #fc60c1, 0 6px 0 transparent, 0 7px 0 transparent,
    0 8px 0 transparent, 0 9px 0 transparent, 0 10px 10px rgba(0, 0, 0, 0.4);

  ${(props) =>
    props.index &&
    css`
      &:nth-child(${props.index}) {
        animation-delay: ${0.2 * (props.index - 1)}s;
      }
    `}

  @media (max-width: 740px) {
    font-size: 20vw;
  }
`;

/* 메인 화면 컴포넌트 */
function MainDisplay() {
  const navigate = useNavigate();

  /* 5초 뒤에 메인화면에서 투두리스트화면으로 이동되도록 하는 함수 */
  const countdown = () => {
    setTimeout(function () {
      navigate("/todo");
    }, 5000);
  };

  const isPc = useMediaQuery({
    query: "(min-width:741px)",
  });

  return (
    <Page onLoad={countdown()}>
      {isPc && <GifBg />}
      <Title>
        <Words index={1}>K</Words>
        <Words index={2}>i</Words>
        <Words index={3}>t</Words>
        <Words index={4}>s</Words>
        <Words index={5}>c</Words>
        <Words index={6}>h</Words>
      </Title>
    </Page>
  );
}

export default MainDisplay;
