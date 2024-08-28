import { Injectable } from '@angular/core';
import { IFakeApiStoreResponse } from '../../interfaces/IFakeApiStoreResponse';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cart = new BehaviorSubject<IFakeApiStoreResponse[]>([]);
  public cart$ = this.cart.asObservable();

  public addItem(item: IFakeApiStoreResponse) {
    const currentCart = this.cart.getValue();
    this.cart.next([...currentCart, item]);
  }

  public removeItemById(id: number) {
    const currentCart = this.cart.getValue();
    const updatedCart = currentCart.filter(cartItem => cartItem.id !== id);
    this.cart.next(updatedCart);
  }

  public clearCart() {
    this.cart.next([]);
  }

  public getTotalPrice(): number {
    return this.cart.getValue().reduce((total, item) => total + item.price, 0);
  }

  constructor() {}
}
