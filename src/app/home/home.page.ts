import { Component, OnInit } from '@angular/core';
import { HttpService } from '../services/http.service';
import { environment } from 'src/environments/environment';
import { IFakeApiStoreResponse, Category } from '../interfaces/IFakeApiStoreResponse';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  public products: IFakeApiStoreResponse[] = [] ;
  public categories!: Category;
  private readonly url = environment.BASE_URL;
  
  constructor(private readonly httpService: HttpService, private readonly navController: NavController) {}

  async ngOnInit() {
    await this.getProducts();
    await this.getCategories();
  }

  private async getProducts() {
    try {
      this.products = await this.httpService.get<IFakeApiStoreResponse[]>(`${this.url}products`);
    } catch (error) {
      console.error(error);
    }
  }

  private async getCategories() {
    try {
      this.categories = await this.httpService.get<Category>(`${this.url}products/categories`);
    } catch (error) {
      console.error(error);
    }
  }

  public async getProductInASpecificCategory(category: string) {
    try {
      if (category === 'all') {
        this.getProducts();
      } else {
        this.products = await this.httpService.get<IFakeApiStoreResponse[]>(`${this.url}products/category/${category}`);
      }
    } catch (error) {
      console.error(error);
    }
  }

  public doNavigate(id: number) {
    this.navController.navigateForward(`details/${id}`);
  }
}
