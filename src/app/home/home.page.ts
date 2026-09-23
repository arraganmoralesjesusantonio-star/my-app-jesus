import { Component } from '@angular/core';
import { IonHeader, IonButton, IonContent, IonFooter } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonHeader, IonButton, IonContent, IonFooter],
})
export class HomePage {
  numero: number = 0;

  constructor() {}
}