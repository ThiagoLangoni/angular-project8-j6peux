import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class CartService {
  items = [];

  constructor(
    private http: HttpClient
  ) {}


  addToCart(product) {
    this.items.push(product);
  }

  getItems() {
    return this.items;
  }

  removeItem(productId) {
    this.items.splice(productId, 1); 
  }

  clearCart() {
    this.items = [];
    return this.items;
  }

  getShippingPrices() {
    return this.http.get('/assets/shipping.json');
  }
}