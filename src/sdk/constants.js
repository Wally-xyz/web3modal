"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WALLY_ROUTES = exports.getRedirectPage = exports.getScrimElement = exports.SCRIM_TEXT_ID = exports.REDIRECT_CAPTION_ID = exports.APP_ROOT = void 0;
const types_1 = require("./types");
exports.APP_ROOT = "http://localhost:8888/v1";
// https://api.wally.xyz/v1
exports.REDIRECT_CAPTION_ID = "wally-redirect-caption";
exports.SCRIM_TEXT_ID = "wally-scrim-text";
const getScrimElement = () => {
  const scrim = document.createElement("div");
  scrim.style.position = "absolute";
  scrim.style.top = "0";
  scrim.style.left = "0";
  scrim.style.width = "100%";
  scrim.style.height = "100%";
  scrim.style.background = "#9995";
  const text = document.createElement("div");
  text.id = exports.SCRIM_TEXT_ID;
  text.innerText = "Logging in to Wally...";
  text.style.position = "absolute";
  text.style.width = "256px";
  text.style.height = "128px";
  text.style.background = "#CCC";
  text.style.color = "#222";
  text.style.fontWeight = "bold";
  text.style.textAlign = "center";
  text.style.paddingTop = "48px";
  text.style.margin = "auto";
  text.style.top = "0";
  text.style.left = "0";
  text.style.right = "0";
  text.style.bottom = "0";
  text.style.borderRadius = "5px";
  text.style.boxShadow = "0px 3px 24px 3px #222c";
  scrim.appendChild(text);
  return scrim;
};
exports.getScrimElement = getScrimElement;
const getRedirectPage = () => {
  const containerEl = document.createElement("div");
  containerEl.style.position = "absolute";
  containerEl.style.top = "50%";
  containerEl.style.left = "50%";
  containerEl.style.transform = "translate(-50%, -50%)";
  containerEl.style.textAlign = "center";
  const el = document.createElement("h1");
  el.innerText = "Logging In To Wally";
  const img = document.createElement("img");
  img.src = "/logo.gif";
  img.width = 150;
  const caption = document.createElement("p");
  caption.id = exports.REDIRECT_CAPTION_ID;
  caption.innerText = "Fetching token...";
  caption.style.fontStyle = "italic";
  containerEl.appendChild(el);
  containerEl.appendChild(img);
  containerEl.appendChild(caption);
  return containerEl;
};
exports.getRedirectPage = getRedirectPage;
exports.WALLY_ROUTES = {
  [types_1.WallyMethodName.ACCOUNTS]: "/me",
  [types_1.WallyMethodName.REQUEST_ACCOUNTS]: "/me",
  [types_1.WallyMethodName.SIGN]: "/wallet/sign-message",
  [types_1.WallyMethodName.PERSONAL_SIGN]: "/wallet/sign-message",
  [types_1.WallyMethodName.SIGN_TYPED]: "/wallet/sign-typed-data",
  [types_1.WallyMethodName.SIGN_TRANSACTION]: "/wallet/sign-transaction",
  [types_1.WallyMethodName.SEND_TRANSACTION]: "/wallet/send-transaction"
};
//# sourceMappingURL=constants.js.map
