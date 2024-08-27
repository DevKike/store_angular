import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IFakeApiStoreResponse } from 'src/app/interfaces/IFakeApiStoreResponse';
import { HttpService } from 'src/app/services/http/http.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {
  public product!: IFakeApiStoreResponse;
  private BASE_URL = environment.BASE_URL;

  constructor(
    private readonly httpService: HttpService,
    private readonly params: ActivatedRoute
  ) {}

  async ngOnInit() {
    this.getProductById();
  }

  private async getProductById() {
    this.params.params.subscribe(async (params) => {
      const url = `${this.BASE_URL}products/${params['id']}`;
      this.product = await this.httpService.get<IFakeApiStoreResponse>(url);
    });
  }
}
