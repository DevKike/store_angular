import { Injectable } from '@angular/core';
import { IFakeApiStoreResponse } from '../../interfaces/IFakeApiStoreResponse';
import { BehaviorSubject } from 'rxjs';
import { LoadingController } from '@ionic/angular';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cart = new BehaviorSubject<IFakeApiStoreResponse[]>([]);
  public cart$ = this.cart.asObservable();

  constructor(private readonly loadingController: LoadingController) {}

  public addItem(item: IFakeApiStoreResponse) {
    const currentCart = this.cart.getValue();
    this.cart.next([...currentCart, item]);
  }

  public removeItemById(id: number) {
    const currentCart = this.cart.getValue();
    const updatedCart = currentCart.filter((cartItem) => cartItem.id !== id);
    this.cart.next(updatedCart);
  }

  public clearCart() {
    this.cart.next([]);
  }

  public getTotalPrice(): number {
    return this.cart.getValue().reduce((total, item) => total + item.price, 0);
  }

  public async payCart() {
    const loading = await this.loadingController.create({
      message: 'Executing payment...',
      duration: 3000,
      spinner: 'circles'
    });

    await loading.present();

    await this.processPayment();

    await loading.dismiss();
  }

  private async processPayment() {
    return new Promise((resolve) => setTimeout(resolve, 2000));
  }
}
