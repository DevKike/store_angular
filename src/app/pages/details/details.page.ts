import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IFakeApiStoreResponse } from 'src/app/interfaces/IFakeApiStoreResponse';
import { CartService } from 'src/app/services/cart/cart.service';
import { HttpService } from 'src/app/services/http/http.service';
import { ToastService } from 'src/app/services/toast/toast.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {
  public productsOnCart: IFakeApiStoreResponse[] = [];
  public product!: IFakeApiStoreResponse;
  private BASE_URL = environment.BASE_URL;

  constructor(
    private readonly httpService: HttpService,
    private readonly params: ActivatedRoute,
    private readonly toastService: ToastService,
    private readonly cartService: CartService
  ) {}

  async ngOnInit() {
    this.getProductById();
  }

  public async addProductToCart() {
    if (this.productsOnCart) {
      this.cartService.addItem(this.product);
      await this.toastService.showToast('Added with success', 500, 'top');
    }
  }

  private async getProductById() {
    this.params.params.subscribe(async (params) => {
      const url = `${this.BASE_URL}products/${params['id']}`;
      this.product = await this.httpService.get<IFakeApiStoreResponse>(url);
    });
  }
}
