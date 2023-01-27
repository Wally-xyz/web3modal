import * as React from "react";
import styled from "styled-components";

import { ThemeColors } from "../helpers";
import {
  PROVIDER_WRAPPER_CLASSNAME,
  PROVIDER_CONTAINER_CLASSNAME
} from "../constants";

interface IStyedThemeColorOptions {
  maxWidth?: number;
  themeColors: ThemeColors;
}

const SProviderContainer = styled.div<IStyedThemeColorOptions>`
  transition: background-color 0.2s ease-in-out;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${({ themeColors }) => themeColors.background};
  max-width: ${({ maxWidth }) => (maxWidth ? `${maxWidth}px` : "800px")};
  padding: 24px 16px;
  pointer-events: auto;
  @media screen and (max-width: 768px) {
    padding: 8px 16px;
  }
  z-index: 3;
  border-radius: 12px 12px 0px 0px;
`;

const SProviderWrapper = styled.div<IStyedThemeColorOptions>`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-radius: 0;
`;

const Input = styled.input`
  background: transparent;
  border: 2px solid #ecf1f3;
  border-radius: 12px;
  color: black;
  display: block;
  font-size: 14px;
  height: 48px;
  padding: 16px;
  outline: none;
  width: 320px;
  max-width: 100%;

  &::placeholder {
    color: #d3d3d3;
  }
`;

const Submit = styled.button`
  background: #0068ff;
  border-radius: 12px;
  cursor: pointer;
  color: white;
  cursor: pointer;
  display: block;
  font-size: 16px;
  font-weight: 700;
  line-height: 16px;
  margin-top: 8px;
  padding: 12px 24px;
  width: 100%;

  @media (hover: hover) {
    &:hover {
      background-color: #1878ff;
      transition: 0.15s;
    }
  }
`;

const Title = styled.div`
  font-size: 12px;
  font-weight: 800;
  margin-left: 4px;
  margin-bottom: 4px;
  text-align: left;
  text-transform: uppercase;
  width: 100%;

  @media screen and (max-width: 768px) {
    margin-top: 1vw;
    margin-bottom: 1vw;
  }
`;

const PoweredBy = styled.div`
  display: flex;
  align-items: flex-start;
  margin-top: 4px;
  font-size: 14px;
  text-transform: uppercase;
`;

const WallyLogo = styled.img`
  height: 20px;
  margin-left: 4px;
`;

interface IProviderProps {
  name: string;
  logo: string;
  description: string;
  themeColors: ThemeColors;
  onClick: (arg0: string) => void;
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
  const [email, setEmail] = React.useState("");
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
        <Title>Enter your email</Title>
        <Input
          placeholder="name@email.com"
          value={email}
          onChange={(e: React.SyntheticEvent<HTMLInputElement>) =>
            setEmail(e.currentTarget.value)
          }
          onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => {
            if (e.key === "Enter") {
              onClick(email);
            }
          }}
        />
        <Submit onClick={() => onClick(email)}>Submit</Submit>
        <PoweredBy>
          Powered by <WallyLogo src={logo} alt="Wally" />
        </PoweredBy>
      </SProviderContainer>
    </SProviderWrapper>
  );
}
