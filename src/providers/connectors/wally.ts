import { IAbstractConnectorOptions } from "../../helpers";

export interface IWallyConnectorOptions extends IAbstractConnectorOptions {
  clientId: string;
  verbose?: boolean;
}

const ConnectToWally = async (
  WallyJS: any,
  opts: IWallyConnectorOptions,
  email: string
) => {
  const provider = new WallyJS({
    clientId: opts.clientId,
    verbose: opts.verbose,
    redirectURL: window.location.href,
    sharedWorkerUrl: "/worker.js",
    email: email
  });

  if (provider.isRedirected()) {
    await provider.handleRedirect();
  }

  return provider;
};

export default ConnectToWally;
