import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class CartExtService {
  calculateTotal(): number {
    // call external datasource
    // return data from exteral datasource
    return Math.random() * 100;
  }
  addToCart(): void {
    // logic here
  }
  sum(number1: number, number2: number) : number {
    return number1 - number2
  }
}