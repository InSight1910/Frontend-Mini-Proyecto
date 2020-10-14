import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario } from 'src/app/Models/Usuario';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }
  UrlGet = 'http://localhost:8080/api/todos';
  UrlDelete = 'http://localhost:8080/api/borrar';
  UrlUpdate = 'http://localhost:8080/api/actualizar';
  UrlCreate = 'http://localhost:8080/api/crear';
  obtenerServicio(): Observable<Usuario[]>{

    return this.http.get<Usuario[]>(this.UrlGet);
  }
  borrarDato(id): Observable<any> {
    return this.http.delete<Usuario[]>(`${this.UrlDelete}/ ${id}`);
  }
  actualizarUsuario(value: Usuario, newValue: any){
    let datos = {
      id: value.id,
      nombre: newValue.name,
      correo: newValue.mail ,
      contraseña: newValue.pass,
      fechaNacimiento: newValue.date,
      genero: newValue.gender
    }
    return this.http.put(`${this.UrlUpdate}/${value.id}`, datos);
  }
  crearUsuario(newValue){
    let datos = {
      nombre: newValue.name,
      correo: newValue.mail ,
      contraseña: newValue.pass,
      genero: newValue.gender,
      fechaNacimiento: newValue.date
    }
    return this.http.post(`${this.UrlCreate}`, datos);
  }
}
