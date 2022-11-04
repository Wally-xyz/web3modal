import React, { useState } from "react";
import Web3 from "web3";

import { handleRedirect, init } from "web3modal/src/sdk";

const HandleRedirect: React.FC = () => {
  if (typeof window !== "undefined") {
    init({
      clientId: "15672a04-5ce6-48ff-991c-54ab200bdd5b",
    });

    handleRedirect({
      closeWindow: true,
      appendContent: true,
    });
  }

  return null;
};

export default HandleRedirect;
