import React from "react";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import dotenv from "dotenv";

import { handleRedirect } from "wally-sdk";

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
