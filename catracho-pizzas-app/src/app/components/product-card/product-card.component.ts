import { Component, OnInit, inject } from '@angular/core';
import { addIcons } from 'ionicons';
import {
  IonAlert,
  IonContent,
  IonItem,
  IonButton,
  AlertController,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonImg,
  IonList,
  IonLabel,
  IonIcon,
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
  standalone: true,
  imports: [
    IonAlert,
    IonContent,
    IonItem,
    IonButton,
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardTitle,
    IonCardSubtitle,
    IonImg,
    IonList,
    IonLabel,
    IonIcon,
  ],
})
export class ProductCardComponent implements OnInit {
  ngOnInit() {}

  constructor(){
    
  }

  cantidad: number = 1;

  agregar() {
    if (this.cantidad >= 1) {
      this.cantidad += 1;
    }
  }

  quitar() {
    if (this.cantidad > 1) {
      this.cantidad -= 1;
    } else {
      console.log('no se pueden reducir la cantidad a menos de 1');
    }
  }

  private alertController: AlertController = inject(AlertController);

  async alertControllerFunction(): Promise<void> {
    const alert: HTMLIonAlertElement = await this.alertController.create({
      header: 'Producto Agregado',
      message: 'Ha agregado correctamente el producto a su carrito',
      buttons: this.BotonesAlertController,
    });
    await alert.present();
  }
  BotonesAlertController = [
    {
      text: 'Aceptar',
      role: 'confirm',
      cssClass: 'secondary',
      handler: () => {
        console.log('producto agregado');
      },
    },
  ];
}
