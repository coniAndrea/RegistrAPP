import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalle-personaje',
  templateUrl: './detalle-personaje.page.html',
  styleUrls: ['./detalle-personaje.page.scss'],
})
export class DetallePersonajePage implements OnInit {
  
  pageTitle : string = ''
  personaje:any=null;

  constructor(private activatedRoute: ActivatedRoute) { 
    this.obtenerPersonaje();
  }

  ngOnInit() {
    console.log(this.personaje);
    this.pageTitle = this.personaje.name
  }

  obtenerPersonaje():void{
    this.activatedRoute.queryParams.subscribe(params => {
      this.personaje = JSON.parse(params.personaje);
    })
  }

}
