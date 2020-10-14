import { Component, OnInit, Inject } from '@angular/core';
import { MatCalendarCellCssClasses } from '@angular/material/datepicker';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Usuario } from 'src/app/Models/Usuario';
import { ApiService } from "../../Services/api.service";
import { TableComponent } from "../table/table.component";

@Component({
  selector: 'app-actualizar-usuario',
  templateUrl: './actualizar-usuario.component.html',
  styleUrls: ['./actualizar-usuario.component.css']
})
export class ModificarusuarioComponent implements OnInit {

  constructor(private apiservice: ApiService, private dialogRef: MatDialogRef<TableComponent>, @Inject(MAT_DIALOG_DATA) data)
  { this.values = data;
   }
  values: Usuario;

  paises: string[] = [
    "Chile",
    "Uruguay",
    "Colombia",
    "Venezuela",
    "Brasil",
    "España",
    "Ecuador",
    "Peru",
    "Argentina"
  ]

  genero: string[] = [
    "Femenino",
    "Masculino",
    "No Especificado"
  ];
  ngOnInit(): void {
    this.id = this.values.id;
  }
  name;
  pass;
  mail;
  picker;
  gender;
  id;
  // tslint:disable-next-line: member-ordering
  newData;

  actualizar(){
    this.newData = {
      name: this.name,
      pass: this.pass,
      mail: this.mail,
      date: this.picker,
      gender: this.gender
    };
    console.log(this.values);
    this.apiservice.actualizarUsuario(this.values, this.newData).subscribe();
  }
  dateClass = (d: Date): MatCalendarCellCssClasses => {
    const date = d.getDate();


    return (date === 1 || date === 20) ? 'example-custom-date-class' : '';
  }


  isClick: boolean = true;

}
