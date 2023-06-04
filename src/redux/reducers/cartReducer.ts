import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CartItem } from '../types/types';

interface CartState {
  items: CartItem[];
}

const initialState: CartState = {
  items: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<CartItem>) => {
        const newItem = action.payload;
        const existingItem = state.items.find((item) => item.id === newItem.id);
        if (existingItem) {
          existingItem.quantity += newItem.quantity;
        } else {
          state.items.push(newItem);
        }
      },
      removeItem: (state, action: PayloadAction<number>) => {
        const itemId = action.payload;
        state.items = state.items.filter((item) => item.id !== itemId);
      },
      updateQuantity: (state, action: PayloadAction<{ itemId: number; quantity: number }>) => {
        const { itemId, quantity } = action.payload;
        const item = state.items.find((item) => item.id === itemId);
        if (item) {
          item.quantity = quantity;
        }
      },
  },
});

export const { actions: cartActions, reducer: cartReducer } = cartSlice;
export default cartReducer;
