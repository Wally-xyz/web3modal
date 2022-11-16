import * as React from "react";
import * as ReactDOM from "react-dom";
import { createGlobalStyle } from "styled-components";

import { globalStyle } from "./styles";
import { BrowserRouter } from "react-router-dom";
import Main from "./components/Main";

import { init } from "wally-sdk";

const wallyClientId = process.env.REACT_APP_WALLY_CLIENT_ID;

const GlobalStyle = createGlobalStyle`
  ${globalStyle}
`;

// @ts-ignore
declare global {
  // tslint:disable-next-line
  interface Window {
    web3: any;
    ethereum: any;
    Web3Modal: any;
    [name: string]: any;
  }
}

init({
  clientId: wallyClientId!
});

ReactDOM.render(
  <>
    <BrowserRouter>
      <GlobalStyle />
      <Main />
    </BrowserRouter>
  </>,
  document.getElementById("root")
);
