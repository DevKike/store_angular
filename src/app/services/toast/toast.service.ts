import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root',
})
export class ToastService {

  constructor(private readonly toastController: ToastController) {}

  public async presentToast(message: string, duration: number, position: 'top' | 'bottom' | 'middle' = 'bottom') {
    const toast = await this.toastController.create({
      message,
      duration,
      position,
    });

    await toast.present();
  }
}
