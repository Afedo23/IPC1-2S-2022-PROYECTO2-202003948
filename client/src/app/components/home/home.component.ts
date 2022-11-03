import { Component, OnInit } from '@angular/core';
import { JugadorService } from 'src/app/serveces/jugador.service';
import { UsuarioService } from 'src/app/serveces/usuario.service';

import { JugadorInterface } from 'src/app/models/jugador';
import { UsuarioInterface } from 'src/app/models/usuario';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  datosJugadores: JugadorInterface[] = [];
  usuario: UsuarioInterface;

  constructor(public jugadorService: JugadorService,private usuarioService: UsuarioService) { }

  ngOnInit(): void {
    this.ObtenerJugadores();
    this.ObtenerDatosUsuarioLoggeado();
  }

  ObtenerDatosUsuarioLoggeado(){
    this.usuario = this.usuarioService.getUsuarioActual();
  }

    ObtenerJugadores(){
    this.jugadorService.CargarDatos().subscribe(async (res) =>
    {
      let datos: any = res;
      this.datosJugadores = datos;
      //console.log("LISTADO DE JUGADORES: ");
      //console.log(this.datosJugadores);
    },
    err => console.log(err));
  }

}
