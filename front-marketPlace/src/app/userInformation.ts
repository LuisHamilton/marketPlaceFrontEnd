export interface UserInformation {
    id: number;
    name: string;
    phone: string;
    login: string;
    passwd: string;
    email: string;
    date_of_birth: Date;
    document: string;
    address: UserAddress;
}
export interface UserAddress{
    id: number;
    street: string;
    city: string;
    state: string;
    country: string;
    postal_code: string;
}