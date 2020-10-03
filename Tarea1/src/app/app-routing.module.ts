import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {GestionCategoriasComponent} from './views/gestion-categorias/gestion-categorias.component';
import {AdministracionAfiliacionesComponent} from './views/administracion-afiliaciones/administracion-afiliaciones.component';
import {GestionProductoresComponent} from './views/vista-administradores/gestion-productores/gestion-productores.component';
import {ActualizarProductoresComponent} from './views/vista-administradores/actualizar-productores/actualizar-productores.component';
import {GestionProductosComponent} from './views/vista-productores/gestion-productos/gestion-productos.component';
import {LogInComponent} from './views/vista-clientes/log-in/log-in.component';
import {ProductoresComponent} from './views/vista-clientes/productores/productores.component';
import {ProductosComponent} from './views/vista-clientes/productos/productos.component';


const routes: Routes = [
  {path: 'GestionCategorias', component: GestionCategoriasComponent},
  {path: 'adminAfiliaciones', component: AdministracionAfiliacionesComponent},
  {path: 'GestionProductores', component: GestionProductoresComponent},
  {path: 'ActualizarProductores', component: ActualizarProductoresComponent},
  {path: 'GestionProductos', component: GestionProductosComponent},
  {path: 'LogIn', component: LogInComponent},
  {path: 'Productores', component: ProductoresComponent},
  {path: 'Productos', component: ProductosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [GestionCategoriasComponent, AdministracionAfiliacionesComponent,
  ActualizarProductoresComponent, GestionProductoresComponent, GestionProductosComponent, LogInComponent, ProductoresComponent,
  ProductosComponent];
