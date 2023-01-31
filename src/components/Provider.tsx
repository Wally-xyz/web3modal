import * as React from "react";
import styled from "styled-components";

import { ThemeColors } from "../helpers";
import {
  PROVIDER_WRAPPER_CLASSNAME,
  PROVIDER_CONTAINER_CLASSNAME,
  PROVIDER_ICON_CLASSNAME,
  PROVIDER_NAME_CLASSNAME,
} from "../constants";

const SIcon = styled.div`
  width: 24px;
  height: 24px;
  display: flex;
  border-radius: 50%;
  overflow: visible;
  box-shadow: none;
  justify-content: center;
  align-items: center;
  & img {
    width: 100%;
    height: 100%;
  }

  @media screen and (max-width: 768px) {
    width: 8.5vw;
    height: 8.5vw;
  }
`;

interface IStyedThemeColorOptions {
  themeColors: ThemeColors;
}

const SName = styled.div<IStyedThemeColorOptions>`
  font-size: 16px;
  font-weight: 700;
  margin-left: 8px;
  color: ${({ themeColors }) => themeColors.main};
  @media screen and (max-width: 768px) {
    font-size: 5vw;
  }
`;

const SProviderContainer = styled.div<IStyedThemeColorOptions>`
  transition: background-color 0.2s ease-in-out;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ themeColors }) => themeColors.background};
  border-radius: 32px;
  padding: 8px 8px;
  border: 1px solid #ecf1f3;
  @media screen and (max-width: 768px) {
    padding: 1vw;
  }
`;

const SProviderWrapper = styled.div<IStyedThemeColorOptions>`
  width: 100%;
  padding: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  cursor: pointer;
  border-radius: 0;
  border: ${({ themeColors }) => `1px solid ${themeColors.border}`};
  @media (hover: hover) {
    &:hover ${SProviderContainer} {
      background-color: ${({ themeColors }) => themeColors.hover};
    }
  }
`;

interface IProviderProps {
  name: string;
  logo: string;
  description: string;
  themeColors: ThemeColors;
  onClick: () => void;
}

export function Provider(props: IProviderProps) {
  const {
    name,
    logo,
    description,
    themeColors,
    onClick,
    ...otherProps
  } = props;
  return (
    <SProviderWrapper
      themeColors={themeColors}
      className={PROVIDER_WRAPPER_CLASSNAME}
      onClick={onClick}
      {...otherProps}
    >
      <SProviderContainer
        themeColors={themeColors}
        className={PROVIDER_CONTAINER_CLASSNAME}
      >
        <SIcon className={PROVIDER_ICON_CLASSNAME}>
          <img src={logo} alt={name} />
        </SIcon>
        <SName themeColors={themeColors} className={PROVIDER_NAME_CLASSNAME}>
          {name}
        </SName>
      </SProviderContainer>
    </SProviderWrapper>
  );
}
