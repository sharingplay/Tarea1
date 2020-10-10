import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {GestionCategoriasComponent} from './views/vista-administradores/gestion-categorias/gestion-categorias.component';
import {AdministracionAfiliacionesComponent} from './views/vista-administradores/administracion-afiliaciones/administracion-afiliaciones.component';
import {GestionProductoresComponent} from './views/vista-administradores/gestion-productores/gestion-productores.component';
import {AgregarProductoresComponent} from './views/vista-administradores/agregar-productores/agregar-productores.component';
import {GestionProductosComponent} from './views/vista-productores/gestion-productos/gestion-productos.component';
import {LogInComponent} from './views/vista-clientes/log-in/log-in.component';
import {ProductoresComponent} from './views/vista-clientes/productores/productores.component';
import {ProductosComponent} from './views/vista-clientes/productos/productos.component';
import {VistaProductoresComponent} from './views/vista-productores/vista-productores.component';
import { HomeViewComponent } from './views/home-view/home-view.component';
import { VistaReportesComponent } from './views/vista-administradores/vista-reportes/vista-reportes.component';
import {VistaClientesComponent} from './views/vista-clientes/vista-clientes.component';
import {CreacionCuentaClienteComponent} from './views/vista-clientes/creacion-cuenta-cliente/creacion-cuenta-cliente.component';
import {SolicitudAfiliacionComponent} from './views/vista-productores/solicitud-afiliacion/solicitud-afiliacion.component';
import {ActualizarProductoresComponent} from './views/vista-administradores/actualizar-productores/actualizar-productores.component';
import {ActualizacionDatosClienteComponent} from './views/vista-clientes/actualizacion-datos-cliente/actualizacion-datos-cliente.component';

const routes: Routes = [
  {path: '', redirectTo: '/Home', pathMatch: 'full' },
  {path: 'Home', component: HomeViewComponent},
  {path: 'GestionCategorias', component: GestionCategoriasComponent},
  {path: 'adminAfiliaciones', component: AdministracionAfiliacionesComponent},
  {path: 'GestionProductores', component: GestionProductoresComponent},
  {path: 'AgregarProductores', component: AgregarProductoresComponent},
  {path: 'GestionProductos', component: GestionProductosComponent},
  {path: 'LogIn', component: LogInComponent},
  {path: 'Productores', component: ProductoresComponent},
  {path: 'Productos', component: ProductosComponent},
  {path: 'VistaProductores', component: VistaProductoresComponent},
  {path: 'VistaReportes', component: VistaReportesComponent},
  {path: 'VistaClientes', component: VistaClientesComponent},
  {path: 'CrearCuentaCliente', component: CreacionCuentaClienteComponent},
  {path: 'SolicitudAfiliacion', component: SolicitudAfiliacionComponent},
  {path: 'ActualizarProductor', component: ActualizarProductoresComponent},
  {path: 'ActualizarCliente', component: ActualizacionDatosClienteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [GestionCategoriasComponent, AdministracionAfiliacionesComponent,
  AgregarProductoresComponent, GestionProductoresComponent, GestionProductosComponent, LogInComponent, ProductoresComponent,
  ProductosComponent, VistaProductoresComponent, HomeViewComponent, VistaReportesComponent, VistaClientesComponent,
  CreacionCuentaClienteComponent, SolicitudAfiliacionComponent, ActualizarProductoresComponent, ActualizacionDatosClienteComponent];
