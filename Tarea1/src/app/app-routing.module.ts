import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {GestionCategoriasComponent} from './views/vista-administradores/gestion-categorias/gestion-categorias.component';
import {AdministracionAfiliacionesComponent} from './views/vista-administradores/administracion-afiliaciones/administracion-afiliaciones.component';
import {GestionProductoresComponent} from './views/vista-administradores/gestion-productores/gestion-productores.component';
import {ActualizarProductoresComponent} from './views/vista-administradores/actualizar-productores/actualizar-productores.component';
import {GestionProductosComponent} from './views/vista-productores/gestion-productos/gestion-productos.component';
import {LogInComponent} from './views/vista-clientes/log-in/log-in.component';
import {ProductoresComponent} from './views/vista-clientes/productores/productores.component';
import {ProductosComponent} from './views/vista-clientes/productos/productos.component';
import {VistaProductoresComponent} from './views/vista-productores/vista-productores.component';
import { HomeViewComponent } from './views/home-view/home-view.component';

const routes: Routes = [
  { path: '', redirectTo: '/Home', pathMatch: 'full' },
  {path: 'Home', component: HomeViewComponent},
  {path: 'GestionCategorias', component: GestionCategoriasComponent},
  {path: 'adminAfiliaciones', component: AdministracionAfiliacionesComponent},
  {path: 'GestionProductores', component: GestionProductoresComponent},
  {path: 'ActualizarProductores', component: ActualizarProductoresComponent},
  {path: 'GestionProductos', component: GestionProductosComponent},
  {path: 'LogIn', component: LogInComponent},
  {path: 'Productores', component: ProductoresComponent},
  {path: 'Productos', component: ProductosComponent},
  {path: 'VistaProductor', component: VistaProductoresComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [GestionCategoriasComponent, AdministracionAfiliacionesComponent,
  ActualizarProductoresComponent, GestionProductoresComponent, GestionProductosComponent, LogInComponent, ProductoresComponent,
  ProductosComponent, VistaProductoresComponent, HomeViewComponent];
