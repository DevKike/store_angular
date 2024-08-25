import { Component, OnInit } from '@angular/core';
import { HttpService } from '../services/http.service';
import { environment } from 'src/environments/environment';
import { IFakeStoreAPIResponse, Result } from '../interfaces/IFakeApiStore';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  public products!: IFakeStoreAPIResponse;

  constructor(private readonly httpService: HttpService) {}

  async ngOnInit() {
    const url = environment.URL_BASE + 'products';
    const results: Result[] = await this.httpService.get<Result[]>(url);
    this.products = { results }
    console.log('🚀 ~ HomePage ~ ngOnInit ~ this.products:', this.products);
  }
}
