import React from "react";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import dotenv from "dotenv";

import { handleRedirect, init } from "web3modal/src/sdk";

const HandleRedirect: React.FC = () => {
  const wallyClientId = process.env.REACT_APP_WALLY_CLIENT_ID;

  if (typeof window !== "undefined") {
    init({
      clientId: wallyClientId!
    });

    handleRedirect({
      closeWindow: true,
      appendContent: true
    });
  }

  return null;
};

export default HandleRedirect;
