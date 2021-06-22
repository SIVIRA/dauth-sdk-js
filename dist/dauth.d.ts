import { SignedTransaction } from "./transaction";
export declare class DAuth {
    private AUTH_URL;
    private CHILD_ID;
    private CHILD_ORIGIN;
    private CHILD_URL;
    private RELAYER_ACCOUNT_NAME;
    private ASSETS_CONTRACT_ACCOUNT_NAME;
    private clientID;
    private child;
    private routes;
    static init(args: {
        clientID: string;
    }): Promise<DAuth>;
    private initChild;
    private initRoutes;
    private initEventListener;
    private handleGetWindowSize;
    private handleResizeChild;
    private responseSuccess;
    private responseError;
    private response;
    authorize(args: {
        responseMode?: string;
        redirectURL: string;
        nonce: string;
    }): void;
    createAssetTransferTransaction(args: {
        receiverID: string;
        assetSourceID: number;
        quantity: string;
        memo?: string;
    }): Promise<SignedTransaction>;
    signTransaction(args: {
        contract: string;
        action: string;
        data: Uint8Array;
    }): Promise<string>;
    private postXAction;
    private closeMessagePorts;
}
