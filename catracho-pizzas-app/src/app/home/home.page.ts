import { Component } from '@angular/core';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonIcon
} from '@ionic/angular/standalone';
//Importamos componente de practica de la clase para usarlo en el HTML
import { PracticaClaseComponent } from '../practica-clase/practica-clase.component';

import { ProductCardComponent } from '../components/product-card/product-card.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    PracticaClaseComponent, //Debe colocarse en los imports
    ProductCardComponent,
    IonIcon
  ],
})
export class HomePage {
  constructor() {}
}
