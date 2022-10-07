import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import localeES from '@angular/common/locales/es-CL';
import { registerLocaleData } from '@angular/common';
import { FiltroPersonajesPipe } from './pipes/filtro-personajes.pipe';
import { BarcodeScanner } from '@awesome-cordova-plugins/barcode-scanner/ngx';

registerLocaleData(localeES,'es');

@NgModule({
  declarations: [AppComponent, FiltroPersonajesPipe,],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [
    BarcodeScanner,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    { provide: LOCALE_ID, useValue: 'es-CL'}
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
