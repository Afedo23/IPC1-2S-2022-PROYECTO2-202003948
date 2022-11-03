import { Component, Input, OnInit } from '@angular/core';
import { JugadorInterface } from 'src/app/models/jugador';

@Component({
  selector: 'app-tarjeta',
  templateUrl: './tarjeta.component.html',
  styleUrls: ['./tarjeta.component.css']
})
export class TarjetaComponent implements OnInit {
  
  test: string = '' 
  @Input() datoJugadorEspecifico: JugadorInterface;

  constructor() { }

  ngOnInit(): void {
    console.log("---------------------");
    console.log(this.datoJugadorEspecifico);
    console.log("---------------------");


  }

}
