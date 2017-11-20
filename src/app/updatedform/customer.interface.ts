export interface Customer {
  name: string;
  addresses: Address[];
}


export interface Address {
  street: string;
  postcode: string;
}


export interface Email {
  email: string;
}
