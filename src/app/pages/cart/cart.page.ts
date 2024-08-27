import { Component } from '@angular/core';
import { ToastService } from 'src/app/services/toast/toast.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage {
  constructor(private readonly toastService: ToastService) {}

  public showToast() {
    this.toastService.presentToast('Payed with success', 500, 'top');
  }
}
