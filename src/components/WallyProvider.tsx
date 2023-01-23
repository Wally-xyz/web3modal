import * as React from "react";
import styled from "styled-components";

import { ThemeColors } from "../helpers";
import {
  PROVIDER_WRAPPER_CLASSNAME,
  PROVIDER_CONTAINER_CLASSNAME,
  PROVIDER_ICON_CLASSNAME,
  PROVIDER_NAME_CLASSNAME,
  PROVIDER_DESCRIPTION_CLASSNAME
} from "../constants";

const SIcon = styled.div`
  width: 45px;
  height: 45px;
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
  width: 100%;
  font-size: 24px;
  font-weight: 700;
  margin-top: 0.5em;
  color: ${({ themeColors }) => themeColors.main};
  @media screen and (max-width: 768px) {
    font-size: 5vw;
  }
`;

const SDescription = styled.div<IStyedThemeColorOptions>`
  width: 100%;
  font-size: 18px;
  margin: 0.333em 0;
  color: ${({ themeColors }) => themeColors.secondary};
  @media screen and (max-width: 768px) {
    font-size: 4vw;
  }
`;

const SProviderContainer = styled.div<IStyedThemeColorOptions>`
  transition: background-color 0.2s ease-in-out;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${({ themeColors }) => themeColors.background};
  border-radius: 12px;
  padding: 24px 16px;
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

const Input = styled.input`
  background: transparent;
  border: 1px solid #D3D3D3;
  border-radius: 8px;
  color: var(--color-text);
  display: block;
  font-size: 24px;
  outline: none;
  width: 100%;

  &::placeholder {
    color: #D3D3D3;
  }
`;

const Submit = styled.button`
  background: var(--color-wally-blue);
  border: 1px solid #D3D3D3;
  border-radius: 8px;
  cursor: pointer;
  color: var(--color-background);
  cursor: pointer;
  display: block;
  font-size: 16px;
  font-weight: 700;
  line-height: 16px;
  padding: 12px 24px;
  transition: transform 0.15s, opacity 0.15s;
`;

interface IProviderProps {
  name: string;
  logo: string;
  description: string;
  themeColors: ThemeColors;
  onClick: () => void;
}

export function WallyProvider(props: IProviderProps) {
  const {
    name,
    logo,
    description,
    themeColors,
    onClick,
    ...otherProps
  } = props;
  const [email, setEmail] = React.useState('');
  return (
    <SProviderWrapper
      themeColors={themeColors}
      className={PROVIDER_WRAPPER_CLASSNAME}
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
        <SDescription
          themeColors={themeColors}
          className={PROVIDER_DESCRIPTION_CLASSNAME}
        >
          {description}
        </SDescription>
        <Input
          placeholder="name@email.com"
          value={email}
          onChange={(e: React.SyntheticEvent<HTMLInputElement>) =>
            setEmail(e.currentTarget.value)
          }
        />
        <Submit disabled={!email} onClick={onClick}>Submit</Submit>
      </SProviderContainer>
    </SProviderWrapper>
  );
}