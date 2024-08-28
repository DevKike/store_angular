import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root',
})
export class ToastService {

  constructor(private readonly toastController: ToastController) {}

  private async presentToast(message: string, duration: number, position: 'top' | 'bottom' | 'middle' = 'bottom') {
    const toast = await this.toastController.create({
      message,
      duration,
      position,
      cssClass: 'custom-toast'
    });

    await toast.present();
  }

  public async showToast(message: string, duration: number, position: 'top' | 'bottom' | 'middle') {
    await this.presentToast(message, duration, position);
  }
}
