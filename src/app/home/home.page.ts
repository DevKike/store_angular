import { Component, OnInit } from '@angular/core';
import { HttpService } from '../services/http.service';
import { environment } from 'src/environments/environment';
import { Product, Category } from '../interfaces/IFakeApiStore';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  public products: Product[] = [];
  public categories: Category[] = [];
  private readonly url = environment.BASE_URL;
  
  constructor(private readonly httpService: HttpService) {}

  async ngOnInit() {
    this.getProducts();
    this.getCategories();
  }

  async getProducts() {
    try {
      this.products = await this.httpService.get<Product[]>(`${this.url}products`);
      console.log("🚀 ~ HomePage ~ getProducts ~ this.products:", this.products)
    } catch (error) {
      console.error(error);
    }
  }

  async getCategories() {
    try {
      this.categories = await this.httpService.get<Category[]>(`${this.url}products/categories`);
      console.log("🚀 ~ HomePage ~ getCategories ~ this.categories:", this.categories)
    } catch (error) {
      console.error(error);
    }
  }
}
