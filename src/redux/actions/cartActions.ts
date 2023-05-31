import { createAction } from '@reduxjs/toolkit';
import { CartItem, PurchaseFormData } from '../types/types';

export const submitPurchase = createAction<PurchaseFormData>('cart/submitPurchase');

export const addToCart = createAction<CartItem>('cart/addToCart');

export const clearCart = createAction('cart/clearCart');
