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
import { GestionPedidosComponent } from './views/gestion-pedidos/gestion-pedidos.component';
import { CarritoComponent} from './shopping-cart/carrito/carrito.component';
import { ItemComponent } from './shopping-cart/carrito/item/item.component';
import { ListaProductosComponent } from './shopping-cart/lista-productos/lista-productos.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';



@NgModule({
  declarations: [
    AppComponent,
    CustomHeaderComponent,
    CustomFooterComponent,
    routingComponents,
    AdministracionAfiliacionesComponent,
    TitleComponent,
    GestionCategoriasComponent,
    CategoryTierComponent,
    SubtitleComponent,
    CarritoComponent,
    GestionPedidosComponent,
    ItemComponent,
    ListaProductosComponent,
    ShoppingCartComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
