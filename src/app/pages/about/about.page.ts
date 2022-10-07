import { Component, OnInit } from '@angular/core';
import { NavigationExtras } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
})
export class AboutPage implements OnInit {

pageTitle = 'About';
busqueda:string = '';

listaProgra : any = [
  {
    id: 1,
    name: 'Luis Felipe ',
    homeworld: 'Programador',
    Informacion:'hola',
    image:'../../../assets/img/luis.png ',
  },
  {
    id: 2,
    name: 'Constanza Aranguiz',
    homeworld: 'Programadora',
    Informacion:'hola',
    image:'../../../assets/img/connie.png ',
  },
  {
    id: 3,
    name: 'Ninoska Muñoz',
    homeworld: 'Programadora',
    Informacion:'hola',
    image:'../../../assets/img/ninoska.png ',
  },
  
];

constructor(private navCtrl: NavController) { }

ngOnInit() {
}

goToDetail(personaje:any) :void {
  const navigationExtras: NavigationExtras = {
    queryParams : {
      personaje: JSON.stringify(personaje)
    }
  };
  this.navCtrl.navigateForward(['detalle-personaje'],navigationExtras);
}

buscar(event):void{
  this.busqueda = event.detail.value;
}

}



