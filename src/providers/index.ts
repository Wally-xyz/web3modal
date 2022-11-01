import { IProviderInfo } from "./../helpers/types";
import * as connectors from "./connectors";
import * as injected from "./injected";
import * as providers from "./providers";
// @ts-ignore
import MEWwallet from "./logos/mewwallet.png";

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
