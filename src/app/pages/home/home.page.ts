import { Component, OnInit } from '@angular/core';
import { BarcodeScanner } from '@awesome-cordova-plugins/barcode-scanner/ngx';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  code: any;
  pageTitle = 'home';
  isNotHome = false;
  loading: HTMLIonLoadingElement;

  constructor(private barcodeScanner: BarcodeScanner, private loadingCtrl:LoadingController) { }

  ngOnInit() {
    this.cargarLoading('Cargando..');
    console.log('ngOnInit');
  }

  ionViewWillEnter(){
    console.log('ionViewWillEnter');
  }

  ionViewDidEnter(){
    console.log('ionViewDidEnter');
  }

  ionViewWillLeave(){
    console.log('ionViewWillLeave');
  }

  ionViewDidLeave(){
    console.log('ionViewDidLeave');
  }

  cargarLoading(message:string){
    this.presentLoading(message);

    setTimeout(() => {
      this.loading.dismiss();
    }, 1000);
  }

  async presentLoading(message:string){
    this.loading = await this.loadingCtrl.create({
      message,
    });
    await this.loading.present();
  }  

  scan(){
    this.barcodeScanner.scan().then(barcodeData => {
      console.log('Barcode data', barcodeData);
     }).catch(err => {
         console.log('Error', err);
     });
  }
}
