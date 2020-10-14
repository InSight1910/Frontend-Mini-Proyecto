import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Usuario } from 'src/app/Models/Usuario';
import { ApiService } from 'src/app/Services/api.service';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import { ModificarusuarioComponent } from '../actualizar-usuario/actualizar-usuario.component'
import { PoliticasPrivacidadComponent } from '../politicas-privacidad/politicas-privacidad.component';
import { PreguntasFrecuentesComponent } from '../preguntas-frecuentes/preguntas-frecuentes.component';

//Uwu
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  constructor(private service: ApiService, public dialog: MatDialog) { }
  estudiantes: Usuario[] = [];

  columnasAMostrar = ['id', 'nombre', 'correo', 'contraseña', 'fechaNacimiento', 'genero', 'botonDelete', 'botonUpdate'];


  dataSource = new MatTableDataSource(this.estudiantes);
  columns = [
    { title: 'ID', name: 'id' },
    { title: 'NOMBRE', name: 'nombre' },
    { title: 'CORREO', name: 'correo' },
    { title: 'CONTRASEÑA', name: 'contraseña' },
    { title: 'FECHA DE NACIMIENTO', name: 'fechaNacimiento' },
    { title: 'GENERO', name: 'genero' },

  ];


  eliminar(i): void {

    this.service.borrarDato(this.estudiantes[i].id).subscribe();
    this.estudiantes.splice(i, 1);
    this.dataSource = new MatTableDataSource(this.estudiantes);


  }
  ngOnInit(): void {
    this.service.obtenerServicio().subscribe(
      post => {
        this.estudiantes = post;
        this.dataSource = new MatTableDataSource(this.estudiantes);
      },
      error => console.log(error)

    );

  }

  openFormulario(usuario: Usuario) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = {
        id: usuario.id,
        name: usuario.name,
        mail: usuario.correo,
        contraseña: usuario.contraseña,
        genero: usuario.genero,
        fecha: usuario.fechaNacimiento
    }
    const dialogRef = this.dialog.open(ModificarusuarioComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  openDialog() {
    const dialogRef = this.dialog.open(PoliticasPrivacidadComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  openPreguntas() {
    const dialogRef = this.dialog.open(PreguntasFrecuentesComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
