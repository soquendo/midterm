
export const ActionType = {
    OPEN_MODAL: 'OPEN_MODAL',
    CLOSE_MODAL: 'CLOSE_MODAL',
  };
  
  export interface CartItem {
    id: number;
    title: string;
    price: number;
    quantity: number;
  }
  
  export interface PurchaseFormData {
    firstName: string;
    lastName: string;
    email: string;
    cartItems: CartItem[];
    totalPrice: number;
  }