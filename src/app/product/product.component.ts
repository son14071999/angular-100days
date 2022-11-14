import { Component, NgModule, OnInit } from '@angular/core';
import { CartExtService } from '../services/CartExtService';
import { CartService } from '../services/CartService';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})


export class ProductComponent implements OnInit {
  // private cartService: CartService;
  constructor(private cartService: CartService) { 
    // this.cartService = new CartService();
  }

  ngOnInit(): void {
    console.log(this.cartService.sum(12,16))
  }

}
