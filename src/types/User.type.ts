interface CompanyType {
  bs: string;
  catchPhrase: string;
  name: string;
}

interface AddressType {
  city: string;
  geo: { lat: string; lng: string };
  street: string;
  suite: string;
  zipcode: string;
}

export interface UserType {
  email: string;
  id: number;
  name: string;
  phone: string;
  username: string;
  website: string;
  company: CompanyType;
  address: AddressType;
}
