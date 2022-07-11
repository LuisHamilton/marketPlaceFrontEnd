export interface PurchaseDetail {
    id: number;
    storeId: number;
    productId: number;
    productImg: string;
    storeName: string;
    productName: string;
    purchaseDate: string;
    purchaseAmount: number;
    purchaseNF: number;
    purchaseNC:number;
    purchasePayment : number;
    clientName: string;
    clientDocument:string;
    clientPhone:string;

}