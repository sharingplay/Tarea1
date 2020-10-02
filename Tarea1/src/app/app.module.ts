import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomHeaderComponent } from './components/custom-header/custom-header.component';
import { CustomFooterComponent } from './components/custom-footer/custom-footer.component';
import { AdministracionAfiliacionesComponent } from './views/administracion-afiliaciones/administracion-afiliaciones.component';
import { TitleComponent } from './components/title/title.component';
import { SolicitudAfiliacionComponent } from './views/vista-productores/solicitud-afiliacion/solicitud-afiliacion.component';
import { GestionProductoresComponent } from './views/vista-administradores/gestion-productores/gestion-productores.component';
import { AgregarComponent } from './agregar/agregar.component';
import { VistaClientesComponent } from './views/vista-clientes/vista-clientes.component';
import { VistaAdministradoresComponent } from './views/vista-administradores/vista-administradores.component';
import { VistaProductoresComponent } from './views/vista-productores/vista-productores.component';
import { ActualizarProductoresComponent } from './views/vista-administradores/actualizar-productores/actualizar-productores.component';
import { GestionProductosComponent } from './views/vista-productores/gestion-productos/gestion-productos.component';
import { LogInComponent } from './views/vista-clientes/log-in/log-in.component';
import { ProductoresComponent } from './views/vista-clientes/productores/productores.component';
import { ProductosComponent } from './views/vista-clientes/productos/productos.component';



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
    VistaClientesComponent,
    VistaAdministradoresComponent,
    VistaProductoresComponent,
    ActualizarProductoresComponent,
    GestionProductosComponent,
    LogInComponent,
    ProductoresComponent,
    ProductosComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
