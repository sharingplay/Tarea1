import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomHeaderComponent } from './components/custom-header/custom-header.component';
import { CustomFooterComponent } from './components/custom-footer/custom-footer.component';
import { AdministracionAfiliacionesComponent } from './views/administracion-afiliaciones/administracion-afiliaciones.component';
import { TitleComponent } from './components/title/title.component';
import { GestionCategoriasComponent } from './views/gestion-categorias/gestion-categorias.component';
import { CategoryTierComponent } from './components/category-tier/category-tier.component';
import { SubtitleComponent } from './components/subtitle/subtitle.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { CategoriasService } from './services/categorias.service';
import { HeaderProductorComponent } from './components/header-productor/header-productor.component';

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

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
