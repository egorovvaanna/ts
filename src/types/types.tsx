
export interface IAdress{
    street: string;
    city: string;
}

export interface IUser{
    id: number;
    name: string;
    email: string;
    address: IAdress;
    phone: string;
    website: string;
}

export interface IPost{
    id: number;
    title: string;
    body: string;

}