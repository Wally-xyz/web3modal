import { IProviderInfo } from "./../helpers/types";
import * as connectors from "./connectors";
import * as injected from "./injected";
import * as providers from "./providers";
// @ts-ignore
import MEWwallet from "./logos/mewwallet.png";

// @ts-ignore
import WallyLogo from "./logos/wallyconnect.png";

export { connectors, injected, providers };

export const MEWCONNECT: IProviderInfo = {
  id: "mewconnect",
  name: "MEW wallet",
  logo: MEWwallet,
  type: "web",
  check: "isMewConnect",
  package: {
    required: [["infuraId", "rpc"]],
  },
};

export const WALLY: IProviderInfo = {
  id: "wally",
  name: "Wally",
  logo: WallyLogo,
  type: "web",
  check: "isWally",
  package: {
    required: [["clientId"]],
  },
};
