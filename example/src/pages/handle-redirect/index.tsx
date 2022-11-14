import React from "react";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import dotenv from "dotenv";

import { handleRedirect } from "web3modal/src/sdk";

const HandleRedirect: React.FC = () => {
  if (typeof window !== "undefined") {
    handleRedirect({
      closeWindow: true,
      appendContent: true
    });
  }

  return null;
};

export default HandleRedirect;
