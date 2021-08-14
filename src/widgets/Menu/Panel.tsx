import React from "react";
import styled from "styled-components";
import PanelBody from "./PanelBody";
import PanelFooter from "./PanelFooter";
import { SIDEBAR_WIDTH_REDUCED, SIDEBAR_WIDTH_FULL } from "./config";
import { PanelProps, PushedProps } from "./types";

interface Props extends PanelProps, PushedProps {
  showMenu: boolean;
  isMobile: boolean;
}

const StyledPanel = styled.div<{ isPushed: boolean; showMenu: boolean }>`
  position: fixed;
  padding-top: ${({ showMenu }) => (showMenu ? "80px" : 0)};
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-shrink: 0;
  background-color: ${({ theme }) => theme.nav.background};
  width: ${({ isPushed }) => (isPushed ? `${SIDEBAR_WIDTH_FULL}px` : 0)};
  height: 100vh;
  transition: padding-top 0.2s, width 0.2s;
  z-index: 11;
  overflow: ${({ isPushed }) => (isPushed ? "initial" : "hidden")};
  transform: translate3d(0, 0, 0);
  border-right: 1px solid rgba(224, 224, 224, .12);

  ${({ theme }) => theme.mediaQueries.nav} {
    width: ${({ isPushed }) => `${isPushed ? SIDEBAR_WIDTH_FULL : SIDEBAR_WIDTH_REDUCED}px`};
  }
`;

const StyledRugDoc = styled.a`
  padding: 16px 16px 0;
  position: relative;

  img {
    width: 100%;
  }

  span {
    position: absolute;
    top: 8px;
    right: 6px;
    font-size: 10px;
    padding: 4px 8px;
    border: 1px solid #FFB74D;
    border-radius: 6px;
    color: #fff;
    text-shadow:
      0 0 7px #fff,
      0 0 10px #fff,
      0 0 21px #fff,
      0 0 42px #0fa,
      0 0 82px #0fa,
      0 0 92px #0fa,
      0 0 102px #0fa,
      0 0 151px #0fa;
  }
`

const Panel: React.FC<Props> = (props) => {
  const { isPushed, showMenu, rugDocLink } = props;
  return (
    <StyledPanel isPushed={isPushed} showMenu={showMenu}>
      <PanelBody {...props} />
      {rugDocLink ? (
        <StyledRugDoc href={rugDocLink}>
          <span>KYC / LOW RISK</span>
          <img src="https://rugdoc.io/assets/2021/06/rugdoc-review-badge-with-glow.png" />
        </StyledRugDoc>
      ) : null}
      <PanelFooter {...props} />
    </StyledPanel>
  );
};

export default Panel;
