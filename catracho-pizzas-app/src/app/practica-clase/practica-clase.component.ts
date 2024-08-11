import { Component, OnInit } from '@angular/core';
import {
  IonAlert,
  IonContent,
  IonItem,
  IonButton,
  AlertController,
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-practica-clase',
  templateUrl: './practica-clase.component.html',
  styleUrls: ['./practica-clase.component.scss'],
  standalone: true,
  imports: [IonAlert, IonContent, IonItem, IonButton],
})
export class PracticaClaseComponent implements OnInit {
  ngOnInit() {}

  BotonesAlertByID = [
    //primer boton de la alerta
    //Todos los botones cuentan con 4 propiedades: text, role, cssClass y handler
    {
      text: 'Cancelar',
      role: 'cancel',
      cssClass: 'secondary',
      handler: () => {
        //aqui en el handler de debe colocar toda la logica a usar con el boton implementado.
        //este es un metodo VOID
        console.log('console.log dentro del handler del boton Cancelar');
      },
    },
    //segundo boton de la alerta
    {
      text: 'Ok',
      handler: () => this.mensajeAlert(),
    },
    //Se pueden seguir colocando mas botones segun la necesidad.
  ];

  //Funcion que se utiliza de ejemplo en el handler del boton ok.
  mensajeAlert() {
    console.log('se llamo a una funcion externa.');
  }

  //---------------------------------------------------------------------------------------------------------
  // Varible que se utiliza para determinar si se debe o no mostrar la Alerta IsOpen
  isOpen: boolean = false;

  //Funcion que se usa con Event Binding (click) para cambiar el valor de la variable isOpen
  openAlert(): void {
    this.isOpen = !this.isOpen;
  }

  //misma logica de botones de Inline Alert para los IsOpen
  BotonesAlertIsOpen = [
    //primer boton de la alerta
    //Todos los botones cuentan con 4 propiedades: text, role, cssClass y handler
    {
      text: 'Cancelar',
      role: 'cancel',
      cssClass: 'secondary',
      handler: () => {
        //aqui en el handler de debe colocar toda la logica a usar con el boton implementado.
        //este es un metodo VOID
        console.log('console.log dentro del handler del boton Cancelar');
      },
    },
    //segundo boton de la alerta
    {
      text: 'Ok',
      handler: () => this.mensajeAlert(),
    },
    //Se pueden seguir colocando mas botones segun la necesidad.
  ];

  //---------------------------------------------------------------------------------------------------------

  //Injectamos la clase AlertController que construya las alertas con la variable alertController
  constructor(private alertController: AlertController) {}

  async alertControllerFunction(): Promise<void> {
    //creamos una alerta mandando a llamar la clase alerController y el metodo .create
    //este metodo es una promesa, asi que debe esperar a ejencutarse para crear una alerta
    const alert: HTMLIonAlertElement = await this.alertController.create({
      header: 'Titulo',
      subHeader: 'Subtitulo',
      message: 'Mensaje a insertar en la alerta.',
      buttons: this.BotonesAlertController,
    });
    await alert.present();
  }

  BotonesAlertController = [
    //primer boton de la alerta
    //Todos los botones cuentan con 4 propiedades: text, role, cssClass y handler
    {
      text: 'Cancelar',
      role: 'cancel',
      cssClass: 'secondary',
      handler: () => {
        //aqui en el handler de debe colocar toda la logica a usar con el boton implementado.
        //este es un metodo VOID
        console.log('console.log dentro del handler del boton Cancelar');
      },
    },
    //segundo boton de la alerta
    {
      text: 'Ok',
      handler: () => this.mensajeAlert(),
    },
    //Se pueden seguir colocando mas botones segun la necesidad.
  ];
}
