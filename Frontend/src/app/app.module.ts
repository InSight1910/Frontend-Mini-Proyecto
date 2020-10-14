import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations'
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppMaterialModule } from './Component/app-material/app-material.module';
import { TableComponent } from './Component/table/table.component';
import { LoginComponent } from './Component/login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { RegistroComponent } from './Component/registro/registro.component';
import { PoliticasPrivacidadComponent } from './Component/politicas-privacidad/politicas-privacidad.component';
import { PreguntasFrecuentesComponent } from './Component/preguntas-frecuentes/preguntas-frecuentes.component';
import { ModificarusuarioComponent} from './Component/actualizar-usuario/actualizar-usuario.component'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    LoginComponent,
    RegistroComponent,
    PoliticasPrivacidadComponent,
    PreguntasFrecuentesComponent,
    ModificarusuarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppMaterialModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
