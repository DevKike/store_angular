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
  public totalAmount!: number;

  constructor(
    private readonly toastService: ToastService,
    private readonly cartService: CartService
  ) {}

  async ngOnInit() {
    await this.initCart();
  }

  public async removeItemFromCartById(id: number) {
    this.cartService.removeItemById(id);
    await this.toastService.showToast('Removed with success', 500, 'top');
  }

  public async payCart() {
    this.cartService.clearCart();
    await this.toastService.showToast('Payed with success', 500, 'top');
  }

  private async initCart() {
    this.cartService.cart$.subscribe((cart) => {
      this.cartItems = cart;
      this.totalAmount = this.cartService.getTotalPrice();
    });
  }
}
