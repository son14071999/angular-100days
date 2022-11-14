import { Injectable } from '@angular/core';
import { CartItem } from './../interfaces/CarItem';

@Injectable({
  providedIn: 'root'
})
export class CartService {
    selectedProducts: CartItem[] = [];
    calculateTotal(): number {
      return this.selectedProducts.reduce(
        (total, item) => item.product.price * item.quantity + total,
        0
      );
    }
    addToCart(): void {
      // logic here
    }
    sum(number1: number, number2: number) : number {
      return number1 + number2
    }
}
