import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {GestionCategoriasComponent} from './views/gestion-categorias/gestion-categorias.component';
import {AdministracionAfiliacionesComponent} from './views/administracion-afiliaciones/administracion-afiliaciones.component';

const routes: Routes = [
  {path: 'GestionCategorias', component: GestionCategoriasComponent},
  {path: 'adminAfiliaciones', component: AdministracionAfiliacionesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [GestionCategoriasComponent, AdministracionAfiliacionesComponent];
