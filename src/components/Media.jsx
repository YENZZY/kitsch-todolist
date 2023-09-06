/* 반응형 컴포넌트 */

import { useMediaQuery } from "react-responsive";

export const Mobile = ({ children }) => {
  const isMobile = useMediaQuery({
    query: "(max-width:740px)",
  });

  return <>{isMobile && children}</>;
};

export const PC = ({ children }) => {
  const isPc = useMediaQuery({
    query: "(min-width:741px)",
  });

  return <>{isPc && children}</>;
};
