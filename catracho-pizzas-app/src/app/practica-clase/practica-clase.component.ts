import { Component, OnInit } from '@angular/core';
import {
  IonAlert,
  IonContent,
  IonItem,
  IonButton,
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-practica-clase',
  templateUrl: './practica-clase.component.html',
  styleUrls: ['./practica-clase.component.scss'],
  standalone: true,
  imports: [IonAlert, IonContent, IonItem, IonButton],
})
export class PracticaClaseComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  BotonesAlertByID = [
    //primer boton de la alerta
    {
      text: 'Cancelar',
      role: 'cancel',
      cssClass: 'secondary',
    },
    //segundo boton de la alerta
    {
      text: 'Ok',
      handler: () => {
        //aqui en el handler de deber colocar toda la logica a usar con el boton implementado.
        console.log('Boton ok');
      },
    },
  ];
}
