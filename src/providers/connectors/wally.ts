import { IAbstractConnectorOptions } from "../../helpers";

export interface IWallyConnectorOptions extends IAbstractConnectorOptions {
  clientId: string;
  verbose?: boolean;
  _init: any;
  _getProvider: any;
}

const ConnectToWally = async (
  WallyConnector: any,
  opts: IWallyConnectorOptions,
  email: string
) => {
  const provider = new WallyConnector({
    clientId: opts.clientId,
    verbose: opts.verbose,
    redirectURL: window.location.href,
    sharedWorkerUrl: "/worker.js"
  });

  // Currently this fails to redirect the user back after logging in
  provider.login(email);

  if (provider.isRedirected()) {
    await provider.handleRedirect();
  }

  return provider;
};

export default ConnectToWally;
