import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { HttpService } from '../services/http.service';
import { CardComponent } from '../components/card/card.component';
import { ToolbarComponent } from '../components/toolbar/toolbar.component';
import { SelectCategoryComponent } from '../components/select-category/select-category.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    HttpClientModule
  ],
  declarations: [HomePage, CardComponent, ToolbarComponent, SelectCategoryComponent],
  providers: [HttpService]
})
export class HomePageModule {}
