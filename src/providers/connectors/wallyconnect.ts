import { IAbstractConnectorOptions } from "../../helpers";

export interface IWallyConnectorOptions extends IAbstractConnectorOptions {
  clientId: string;
  isDevelopment: boolean;
  devUrl?: string | undefined;
}

const ConnectToWally = (Wally: any, opts: IWallyConnectorOptions) => {
  return new Promise(async (resolve, reject) => {
    let clientId = "15672a04-5ce6-48ff-991c-54ab200bdd5b";
    let isDevelopment = false;
    let devUrl = "http://localhost:3000";

    if (opts) {
      clientId = opts.clientId || clientId;
      isDevelopment = opts.isDevelopment || isDevelopment;
      devUrl = opts.devUrl || devUrl;
    }

    const provider = new Wally({
      clientId,
      isDevelopment,
      devUrl,
    });
    try {
      await provider.loginWithEmail();
      resolve(provider);
    } catch (e) {
      reject(e);
    }
  });
};

export default ConnectToWally;
