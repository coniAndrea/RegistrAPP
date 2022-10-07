import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [

    { title: 'Home', url: '/home', icon: 'home' },
    { title: 'Asistencia', url: '/folder/Asistencia', icon: 'pencil' },
    { title: 'Cogigo QR', url: '/codigo-qr', icon: 'qr-code' },
    { title: 'About', url: '/about', icon: 'people' },

  ];
  
}
