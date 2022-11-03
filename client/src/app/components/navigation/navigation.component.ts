import { Component, OnInit, AfterViewInit, ElementRef, ViewChild } from '@angular/core';


import { Router } from '@angular/router';

import { UsuarioService } from 'src/app/serveces/usuario.service';


@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  @ViewChild('searchInput')
  inputSearch?: ElementRef

  constructor(private usuarioService: UsuarioService, public router: Router) { }
  
  ngOnInit(): void {

  }

  CerrarSesion() {
    this.usuarioService.eliminarUsuarioActual();
    this.router.navigate(['login']);
  }

}
