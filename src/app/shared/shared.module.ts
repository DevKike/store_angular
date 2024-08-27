import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from '../components/toolbar/toolbar.component';
import { IonicModule } from '@ionic/angular';
import { FooterComponent } from '../components/footer/footer.component';

@NgModule({
  declarations: [ToolbarComponent, FooterComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [ToolbarComponent, FooterComponent]
})
export class SharedModule {}