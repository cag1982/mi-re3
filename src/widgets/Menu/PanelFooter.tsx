import React, { useState } from "react";
import styled from "styled-components";
import { PancakeRoundIcon, CogIcon, SvgProps } from "../../components/Svg";
import Text from "../../components/Text/Text";
import Flex from "../../components/Flex/Flex";
import Dropdown from "../../components/Dropdown/Dropdown";
import Link from "../../components/Link/Link";
import Skeleton from "../../components/Skeleton/Skeleton";
import Button from "../../components/Button/Button";
import IconButton from "../../components/Button/IconButton";
import MenuButton from "./MenuButton";
import * as IconModule from "./icons";
import { socials, MENU_ENTRY_HEIGHT } from "./config";
import { PanelProps, PushedProps } from "./types";

interface Props extends PanelProps, PushedProps {}

const Icons = (IconModule as unknown) as { [key: string]: React.FC<SvgProps> };
const { MoonIcon, SunIcon, LanguageIcon } = Icons;

const Container = styled.div`
  flex: none;
  padding: 8px 4px;
  background-color: #D50000;
  border-top: solid 2px rgba(133, 133, 133, 0.1);
`;

const PriceBox = styled.div`
  padding: 8px 16px;
`;

const PriceLink = styled.a`
  display: flex;
  align-items: center;
  svg {
    transition: transform 0.3s;
  }
  :hover {
    svg {
      transform: scale(1.2);
    }
  }
`;

// const SettingsEntry = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
//   height: ${MENU_ENTRY_HEIGHT}px;
//   padding: 0 8px;
// `;

const SocialEntry = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: ${MENU_ENTRY_HEIGHT}px;
  padding: 0 16px;
`;

// const MusicBox = () => {
//   const [isPlaying, setIsPlaying] = useState(false);


//   const handlePlay = (evt) => {
//     evt.preventDefault();

//     const song = document.getElementById('song');

//     if (song.paused) {
//       song.play();
//     } else {
//       song.pause();
//     }
//   }

//   const play = () => {
//     setIsPlaying(true)
//   }

//   const pause = () => {
//     setIsPlaying(false)
//   };

//   return (
//     <PriceBox>
//       <audio id="song" autoplay loop onPlay={play} onPause={pause}>
//         <source src="/media/sandman.mp3" />
//         Your browser does not support the
//         <code>audio</code> element.
//       </audio>
//       <Link href="#" color={isPlaying ? 'text' : 'textSubtle'} onClick={handlePlay}>
//         <svg width="32" height="32" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="music" class="svg-inline--fa fa-music fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M470.38 1.51L150.41 96A32 32 0 0 0 128 126.51v261.41A139 139 0 0 0 96 384c-53 0-96 28.66-96 64s43 64 96 64 96-28.66 96-64V214.32l256-75v184.61a138.4 138.4 0 0 0-32-3.93c-53 0-96 28.66-96 64s43 64 96 64 96-28.65 96-64V32a32 32 0 0 0-41.62-30.49z" /></svg>
//       </Link>
//     </PriceBox>
//   )
// }

const PanelFooter: React.FC<Props> = ({
  isPushed,
  pushNav,
  toggleTheme,
  isDark,
  cakePriceUsd,
  currentLang,
  langs,
  setLang,
  priceLink,
}) => {
  if (!isPushed) {
    return (
      <Container>
        <IconButton variant="text" onClick={() => pushNav(true)}>
          <CogIcon />
        </IconButton>
      </Container>
    );
  }

  return (
    <Container>
      {/* <Flex alignItems="center" justifyContent="space-between"> */}
        <PriceBox>
          {cakePriceUsd ? (
            <PriceLink href={priceLink} target="_blank">
              <PancakeRoundIcon width="24px" mr="8px" />
              <Text color="textSubtle" bold>{`$${cakePriceUsd.toFixed(3)}`}</Text>
            </PriceLink>
          ) : (
            <Skeleton width={80} height={24} />
          )}
        </PriceBox>
        {/* <MusicBox /> */}
      {/* </Flex> */}
      <SocialEntry>
        {socials.map((social, index) => {
          const Icon = Icons[social.icon];
          const iconProps = { width: "24px", color: "textSubtle", style: { cursor: "pointer" } };
          const mr = index < socials.length - 1 ? "8px" : 0;
          if (social.items) {
            return (
              <Dropdown key={social.label} position="top" target={<Icon {...iconProps} mr={mr} />}>
                {social.items.map((item) => (
                  <Link external key={item.label} href={item.href} aria-label={item.label} color="textSubtle">
                    {item.label}
                  </Link>
                ))}
              </Dropdown>
            );
          }
          return (
            <Link external key={social.label} href={social.href} aria-label={social.label} mr={mr}>
              <Icon {...iconProps} />
            </Link>
          );
        })}
      </SocialEntry>
      {/*<SettingsEntry>
        <Button variant="text" onClick={() => toggleTheme(!isDark)}>
          <Flex alignItems="center">
            <SunIcon color={isDark ? "textDisabled" : "text"} width="24px" />
            <Text color="textDisabled" mx="4px">
              /
            </Text>
            <MoonIcon color={isDark ? "text" : "textDisabled"} width="24px" />
          </Flex>
        </Button>
        <Dropdown
          position="top-right"
          target={
            <Button variant="text" startIcon={<LanguageIcon color="textSubtle" width="24px" />}>
              <Text color="textSubtle">{currentLang?.toUpperCase()}</Text>
            </Button>
          }
        >
          {langs.map((lang) => (
            <MenuButton
              key={lang.code}
              fullWidth
              onClick={() => setLang(lang)}
              // Safari fix
              style={{ minHeight: "32px", height: "auto" }}
            >
              {lang.language}
            </MenuButton>
          ))}
        </Dropdown>
      </SettingsEntry>*/}
    </Container>
  );
};

export default PanelFooter;
