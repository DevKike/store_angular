import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from '../components/toolbar/toolbar.component';
import { IonicModule } from '@ionic/angular';
import { FooterComponent } from '../components/footer/footer.component';
import { ListCardComponent } from '../components/list-card/list-card.component';

@NgModule({
  declarations: [ToolbarComponent, FooterComponent, ListCardComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [ToolbarComponent, FooterComponent, ListCardComponent]
})
export class SharedModule {}