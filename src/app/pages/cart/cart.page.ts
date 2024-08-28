import { Component, OnInit } from '@angular/core';
import { IFakeApiStoreResponse } from 'src/app/interfaces/IFakeApiStoreResponse';
import { CartService } from 'src/app/services/cart/cart.service';
import { ToastService } from 'src/app/services/toast/toast.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {
  public cartItems: IFakeApiStoreResponse[] = [];

  constructor(
    private readonly toastService: ToastService,
    private readonly cartService: CartService
  ) {}

  async ngOnInit() {
    await this.getItems();
    this.cartService.cart$.subscribe((cart) => {
      this.cartItems = cart;
    });
  }

  public async removeItemFromCartById(id: number) {
    this.cartService.removeItemById(id);
    await this.toastService.showToast('Removed with success', 500, 'top');
  }

  public async payCart() {
    this.cartService.clearCart();
    await this.toastService.showToast('Payed with success', 500, 'top');
  }

  private async getItems() {
    this.cartItems = this.cartService.getItemsOnCart();
  }
}
