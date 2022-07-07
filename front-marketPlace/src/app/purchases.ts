export interface Purchase {
    id: number;
    storeId: number;
    productId: number;
    productImg: string;
    storeName: string;
    productName: string;
    purchaseDate: string;
    purchaseAmount: number;
}