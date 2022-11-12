import { WallyMethodName } from "./types";
export declare const APP_ROOT = "http://localhost:8888/v1";
// https://api.wally.xyz/v1
export declare const REDIRECT_CAPTION_ID = "wally-redirect-caption";
export declare const SCRIM_TEXT_ID = "wally-scrim-text";
export declare const getScrimElement: () => HTMLElement;
export declare const getRedirectPage: () => HTMLElement;
export declare const WALLY_ROUTES: Record<WallyMethodName, string>;
