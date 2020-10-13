import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {CarritoComponent} from '../../../shopping-cart/carrito/carrito.component';
import {HttpClientService} from '../../../services/http-client-service';
import {BsModalService, BsModalRef} from 'ngx-bootstrap/modal';
import {DetallesPedidosComponent} from '../../vista-productores/gestion-pedidos/detalles-pedidos/detalles-pedidos.component';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss']
})
export class ProductosComponent implements OnInit {
  constructor(public dialog: MatDialog, public httpService: HttpClientService, public modalService: BsModalService) {
  }
  listaProductos: object[] = [];
  bsModalRef: BsModalRef;
  openDialog(productos: object[]): void {
    this.listaProductos = this.listaProductos.concat(productos);
    console.log();
    const dialogRef = this.dialog.open(CarritoComponent, {
      width: '70%',
      height: '70%',
      data: this.listaProductos,
      position: {
        top: '',
        bottom: '',
        left: '',
        right: ''
      }
    });
    dialogRef.afterClosed().subscribe(res => {console.log(res); });
  }
  ngOnInit(): void {
  }

}
