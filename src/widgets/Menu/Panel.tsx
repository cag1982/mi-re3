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

const StyledDefiYield = styled.a`
  padding: 4px 8px 0;
  margin: 0 12px 12px;
  background-color: rgba(255, 255, 255, 0.25);
  border-radius: 6px;
  svg {
    width: 100%;
    height: auto;
  }
`

const Panel: React.FC<Props> = (props) => {
  const { isPushed, showMenu, rugDocLink, defiYieldLink } = props;
  return (
    <StyledPanel isPushed={isPushed} showMenu={showMenu}>
      <PanelBody {...props} />
      {rugDocLink ? (
        <StyledRugDoc href={rugDocLink} target="_blank" rel="noreferrer">
          <span>KYC / LOW RISK</span>
          <img src="https://rugdoc.io/assets/2021/06/rugdoc-review-badge-with-glow.png" />
        </StyledRugDoc>
      ) : null}
      {defiYieldLink ? (
        <StyledDefiYield href={defiYieldLink} target="_blank" rel="noreferrer">
          <svg viewBox="0 0 211 50" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M28.6184 1.26616L42.56 9.04079C45.5873 10.729 47.4522 13.8489 47.4522 17.2254V32.7746C47.4522 36.1511 45.5873 39.271 42.56 40.9592L28.6184 48.7338C25.591 50.4221 21.8612 50.4221 18.8339 48.7338L4.89224 40.9592C1.86491 39.271 0 36.1511 0 32.7746L0 17.2254C0 13.8489 1.86491 10.729 4.89224 9.04079L18.8339 1.26616C21.8612 -0.422052 25.591 -0.422052 28.6184 1.26616Z" fill="#1452F0"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M36.6239 23.5062C36.6239 23.7393 36.6179 23.9691 36.6061 24.1957H30.9387C30.9619 23.9688 30.9736 23.7386 30.9736 23.506C30.9736 20.2017 28.9831 17.6352 25.0664 17.6352H21.567V24.1957H16.0449V12.8235H25.0342C31.7761 12.8235 36.6239 16.8656 36.6239 23.5062ZM10.8279 37.0273V26.5294H16.3508V32.1824H19.8186C23.4611 32.1824 25.6246 29.6012 25.7528 26.5294H31.4069C31.2682 33.0437 26.4636 37.0273 19.8506 37.0273H10.8279Z" fill="white"/>
            <path d="M85.3027 24.3962C85.3027 25.9775 85.0051 27.3463 84.41 28.5026C83.8318 29.6418 83.0582 30.5855 82.089 31.3337C81.1368 32.0648 80.057 32.609 78.8498 32.966C77.6425 33.3061 76.4182 33.4762 75.177 33.4762H68.4435V15.4182H74.9729C76.2482 15.4182 77.5065 15.5712 78.7477 15.8773C79.989 16.1664 81.0942 16.6595 82.0635 17.3566C83.0327 18.0368 83.8148 18.955 84.41 20.1112C85.0051 21.2675 85.3027 22.6958 85.3027 24.3962ZM80.7627 24.3962C80.7627 23.376 80.5926 22.5343 80.2526 21.8711C79.9295 21.191 79.4874 20.6554 78.9263 20.2643C78.3822 19.8562 77.753 19.5671 77.0389 19.3971C76.3417 19.227 75.619 19.142 74.8709 19.142H72.7029V29.7013H74.7689C75.551 29.7013 76.2992 29.6163 77.0134 29.4463C77.7445 29.2592 78.3822 28.9617 78.9263 28.5536C79.4874 28.1455 79.9295 27.6014 80.2526 26.9212C80.5926 26.2411 80.7627 25.3994 80.7627 24.3962Z" fill="#050F19"/>
            <path d="M89.7895 33.4762V15.4182H101.93V19.1165H93.9979V22.5088H101.497V26.003H93.9979V29.7523H102.389V33.4762H89.7895Z" fill="#050F19"/>
            <path d="M111.187 19.142V22.8658H118.175V26.4621H111.187V33.4762H106.876V15.4182H118.762V19.142H111.187Z" fill="#050F19"/>
            <path d="M123.166 33.4762V15.4182H127.553V33.4762H123.166Z" fill="#050F19"/>
            <path d="M141.654 25.8245V33.4762H137.292V25.8245L130.508 15.4182H135.788L139.639 22.1007L143.49 15.4182H148.591L141.654 25.8245Z" fill="#050F19"/>
            <path d="M151.536 33.4762V15.4182H155.923V33.4762H151.536Z" fill="#050F19"/>
            <path d="M161.25 33.4762V15.4182H173.391V19.1165H165.458V22.5088H172.957V26.003H165.458V29.7523H173.85V33.4762H161.25Z" fill="#050F19"/>
            <path d="M178.337 33.4762V15.4182H182.724V29.6758H189.712V33.4762H178.337Z" fill="#050F19"/>
            <path d="M210.215 24.3962C210.215 25.9775 209.918 27.3463 209.323 28.5026C208.744 29.6418 207.971 30.5855 207.002 31.3337C206.049 32.0648 204.97 32.609 203.762 32.966C202.555 33.3061 201.331 33.4762 200.089 33.4762H193.356V15.4182H199.885C201.161 15.4182 202.419 15.5712 203.66 15.8773C204.902 16.1664 206.007 16.6595 206.976 17.3566C207.945 18.0368 208.727 18.955 209.323 20.1112C209.918 21.2675 210.215 22.6958 210.215 24.3962ZM205.675 24.3962C205.675 23.376 205.505 22.5343 205.165 21.8711C204.842 21.191 204.4 20.6554 203.839 20.2643C203.295 19.8562 202.666 19.5671 201.951 19.3971C201.254 19.227 200.532 19.142 199.783 19.142H197.615V29.7013H199.681C200.464 29.7013 201.212 29.6163 201.926 29.4463C202.657 29.2592 203.295 28.9617 203.839 28.5536C204.4 28.1455 204.842 27.6014 205.165 26.9212C205.505 26.2411 205.675 25.3994 205.675 24.3962Z" fill="#050F19"/>
          </svg>
        </StyledDefiYield>
      ) : null}
      <PanelFooter {...props} />
    </StyledPanel>
  );
};

export default Panel;
