import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';

import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { ModalModule } from 'ngx-bootstrap/modal';



import { CustomHeaderComponent } from './components/header-principal/custom-header.component';
import { CustomFooterComponent } from './components/custom-footer/custom-footer.component';
import { AdministracionAfiliacionesComponent } from './views/vista-administradores/administracion-afiliaciones/administracion-afiliaciones.component';
import { TitleComponent } from './components/title/title.component';
import { GestionCategoriasComponent } from './views/vista-administradores/gestion-categorias/gestion-categorias.component';
import { CategoryTierComponent } from './components/category-tier/category-tier.component';
import { SubtitleComponent } from './components/subtitle/subtitle.component';
import { HttpClientModule } from '@angular/common/http';
import { HeaderProductorComponent } from './components/header-productor/header-productor.component';
import { HeaderClienteComponent } from './components/header-cliente/header-cliente.component';
import { HomeViewComponent } from './views/home-view/home-view.component';
import { HeaderAdminComponent } from './components/header-admin/header-admin.component';
import { VistaReportesComponent } from './views/vista-administradores/vista-reportes/vista-reportes.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DeleteCategoryModalComponent } from './components/delete-category-modal/delete-category-modal.component';
import { CenteredButtonComponent } from './components/centered-button/centered-button.component';
import { CreateCategoryModalComponent } from './components/create-category-modal/create-category-modal.component';
import { CreacionCuentaClienteComponent } from './views/vista-clientes/creacion-cuenta-cliente/creacion-cuenta-cliente.component';
import { ActualizarProductoresComponent } from './views/vista-administradores/actualizar-productores/actualizar-productores.component';
import { ActualizacionDatosClienteComponent } from './views/vista-clientes/actualizacion-datos-cliente/actualizacion-datos-cliente.component';
import { AfiliationTierComponent } from './components/afiliation-tier/afiliation-tier.component';
import { MoreInfoAfiliationModalComponent } from './components/more-info-afiliation-modal/more-info-afiliation-modal.component';
import { AfiliationInfoModalComponent } from './components/afiliation-info-modal/afiliation-info-modal.component';


@NgModule({
  declarations: [
    AppComponent,
    CustomHeaderComponent,
    CustomFooterComponent,
    HeaderProductorComponent,
    routingComponents,
    AdministracionAfiliacionesComponent,
    TitleComponent,
    GestionCategoriasComponent,
    CategoryTierComponent,
    SubtitleComponent,

    HeaderClienteComponent,

    HomeViewComponent,

    HeaderAdminComponent,

    VistaReportesComponent,

    DeleteCategoryModalComponent,

    CenteredButtonComponent,

    CreateCategoryModalComponent,

    CreacionCuentaClienteComponent,

    ActualizarProductoresComponent,

    ActualizacionDatosClienteComponent,

    AfiliationTierComponent,

    MoreInfoAfiliationModalComponent,

    AfiliationInfoModalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatDialogModule,
    ModalModule.forRoot(),

  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [DeleteCategoryModalComponent]
})
export class AppModule { }
