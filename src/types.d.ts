export interface AddonProps {
  name: string;
  checked: boolean;
  info: string;
  initialPrice: number;
  price: number;
  id: string;
}

export interface User {
  [name: string]: string;
  [email: string]: string;
  [phone: string]: string;
}

export interface InputError {
  incorrectName: string;
  incorrectEmail: string;
  incorrectPhone: string;
}
