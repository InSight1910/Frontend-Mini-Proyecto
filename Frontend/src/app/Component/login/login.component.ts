import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/Services/api.service';
import { Usuario } from 'src/app/Models/Usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user;
  pass;
  mensaje;
  constructor(private router: Router, private service: ApiService) { }
  datos: Usuario[] = [];


  validar(user, pass): void {
    for (let dato of this.datos) {
      if (this.user == dato.correo && this.pass == dato.contraseña) {
        this.router.navigate(['inicio']);
      } else {
        this.mensaje = 'Correo o contraseña incorrecto';
      }
    }

  }

  ngOnInit(): void {
    this.service.obtenerServicio().subscribe(
      post => {
        this.datos = post;
      },
      error => console.log(error)

    );

  }

}
