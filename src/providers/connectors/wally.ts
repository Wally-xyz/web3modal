import { IAbstractConnectorOptions } from "../../helpers";

export interface IWallyConnectorOptions extends IAbstractConnectorOptions {
  clientId: string;
  verbose?: boolean;
  _init: any;
  _getProvider: any;
}

const ConnectToWally = async (
  WallyConnector: any,
  opts: IWallyConnectorOptions
) => {
  opts._init({
    clientId: opts.clientId,
    verbose: opts.verbose,
    redirectURL: window.location.href,
    sharedWorkerUrl: "/worker.js",
  });
  const provider = opts._getProvider();
  return provider;
};

export default ConnectToWally;
