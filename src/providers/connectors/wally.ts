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

  if (provider.isRedirected()) {
    await provider.handleRedirect();
  }

  // Commented out because this crashes the system for some reason
  // await provider.login(email);

  return provider;
};

export default ConnectToWally;
