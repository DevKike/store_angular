import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { HttpService } from '../services/http/http.service';
import { CardComponent } from '../components/card/card.component';
import { SelectCategoryComponent } from '../components/select-category/select-category.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    HttpClientModule,
    SharedModule
  ],
  declarations: [HomePage, CardComponent, SelectCategoryComponent],
  providers: [HttpService]
})
export class HomePageModule {}
