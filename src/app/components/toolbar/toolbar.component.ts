import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent {

  constructor(private readonly navController: NavController) { }

  public doNavigateToCart() {
    this.navController.navigateForward('cart')    
  }
}
