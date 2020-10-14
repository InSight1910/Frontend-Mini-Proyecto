import { Component, OnInit } from '@angular/core';
import {MatCalendarCellCssClasses} from '@angular/material/datepicker';
import {MatDialog} from '@angular/material/dialog';
import { PoliticasPrivacidadComponent } from '../politicas-privacidad/politicas-privacidad.component';
import { PreguntasFrecuentesComponent } from '../preguntas-frecuentes/preguntas-frecuentes.component';
import { ApiService } from 'src/app/Services/api.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  constructor(private dialog: MatDialog, private router: Router , private service: ApiService) { }

  mensaje: string;
  name;
  mail;
  password;
  gender;
  picker;
  newValue;
  regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{3,}$/;
  isClick = true;
  ngOnInit(): void {
  }
  crearUsuario(): void {
    this.newValue = {
        name: this.name,
        mail: this.mail,
        password: this.password,
        gender: this.gender,
        date: this.picker
      };
    this.service.crearUsuario(this.newValue).subscribe(h => console.log(h), error => {if (error.status === 409) {
      this.mensaje = 'Correo existente';
    }});
  }

  // tslint:disable-next-line: member-ordering
  paises: string[] = [
    'Chile',
    'Uruguay',
    'Colombia',
    'Venezuela',
    'Brasil',
    'España',
    'Ecuador',
    'Peru',
    'Argentina'
  ];

  // tslint:disable-next-line: member-ordering
  genero: string[] = [
    'Femenino',
    'Masculino',
    'No Especificado'
  ];

  // tslint:disable-next-line: typedef
  validar(pass){
      if (this.regex.test(pass)){
        this.router.navigate(['inicio']);
      }   else {
      this.mensaje = 'La contraseña debe tener como minimo un numero y un caracter y ser de minimo 4 caracteres';
    }
  }
  dateClass = (d: Date): MatCalendarCellCssClasses => {
    const date = d.getDate();

    // Highlight the 1st and 20th day of each month.
    return (date === 1 || date === 20) ? 'example-custom-date-class' : '';
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(PoliticasPrivacidadComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  openPreguntas(): void {
    const dialogRef = this.dialog.open(PreguntasFrecuentesComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }



}
