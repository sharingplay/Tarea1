import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomHeaderComponent } from './components/custom-header/custom-header.component';
import { CustomFooterComponent } from './components/custom-footer/custom-footer.component';
import { AdministracionAfiliacionesComponent } from './views/administracion-afiliaciones/administracion-afiliaciones.component';
import { TitleComponent } from './components/title/title.component';
import { SolicitudAfiliacionComponent } from './solicitud-afiliacion/solicitud-afiliacion.component';
import { GestionProductoresComponent } from './gestion-productores/gestion-productores.component';
import { AgregarComponent } from './agregar/agregar.component';



@NgModule({
  declarations: [
    AppComponent,
    CustomHeaderComponent,
    CustomFooterComponent,
    routingComponents,
    AdministracionAfiliacionesComponent,
    TitleComponent,
    SolicitudAfiliacionComponent,
    GestionProductoresComponent,
    AgregarComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
