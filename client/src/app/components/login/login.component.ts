import { Component, OnInit } from '@angular/core';
import { UsuarioInterface } from 'src/app/models/usuario';
import { UsuarioService } from 'src/app/serveces/usuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  nombreUsuario: string = "";
  passwordUsuario: string = "";
  datosUsuarios: UsuarioInterface[] = [];

  constructor(private usuarioService: UsuarioService, public router: Router) { }

  ngOnInit(): void {
    this.CargarDatos();
  }

  CargarDatos(){
    this.usuarioService.CargarDatosUsuarios().subscribe(async (res) =>
    {
      let datos: any = res;
      this.datosUsuarios = datos;
      //console.log("LISTADO DE USUARIOS: ");
      //console.log(this.datosUsuarios);
    },
    err => console.log(err));
  }

  Login(){
    if(this.nombreUsuario != "" && this.passwordUsuario != "") {
      for (const usuario of this.datosUsuarios) {
        if (usuario.usuario == this.nombreUsuario && usuario.password == this.passwordUsuario){
          
          this.usuarioService.setUsuarioActual(usuario);
          this.router.navigate(['album']);
          break;
        }
      }
    } else {

    }
  }

}
