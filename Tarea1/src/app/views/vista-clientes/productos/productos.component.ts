/* tslint:disable:align */
import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {CarritoComponent} from '../../../shopping-cart/carrito/carrito.component';
import {HttpClientService} from '../../../services/http-client-service';
import {BsModalService, BsModalRef} from 'ngx-bootstrap/modal';
import {DetallesPedidosComponent} from '../../vista-productores/gestion-pedidos/detalles-pedidos/detalles-pedidos.component';
import {ActivatedRoute} from '@angular/router';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {MessengerService} from '../../../MessengerService';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss']
})
export class ProductosComponent implements OnInit {
  productor: string;
  productos: any;
  cliente: any;
    constructor(public dialog: MatDialog, public httpService: HttpClient, private route: ActivatedRoute, private http: HttpClientService, private messengerService: MessengerService) {
    const prod = +this.route.snapshot.paramMap.get('productor');
      this.messengerService.message.subscribe(value => {this.cliente = value});
      this.productor = prod.toString();
    this.httpService.post('https://localhost:5001/api/Productos/GetPorProductor', { Productor: this.productor}).subscribe(
      (resp: HttpResponse<any>) => { this.productos = resp;
      if (this.cliente.carrito !=  null){
        this.listaProductos = this.listaProductos.concat(this.cliente.carrito);
      }});
  }
  listaProductos: any[] = [];
  bsModalRef: BsModalRef;
  openDialog(productos: any): void {
    let found = false;
    for(let prodAnt of this.listaProductos ){
      if(productos.nombre == prodAnt.nombre){
        prodAnt.cantidad = (Number(prodAnt.cantidad) + 1);
        found = true;
        console.log("Encontre coincidencia");
      }
    }
    if(!found){
      this.listaProductos = this.listaProductos.concat(productos);
    }
    if(productos.cantidad == 0){
      productos.cantidad = 1;
    }
    this.cliente.carrito = this.listaProductos;
    console.log(this.cliente);
    const dialogRef = this.dialog.open(CarritoComponent, {
      width: '70%',
      height: '70%',
      data: this.cliente,
      position: {
        top: '',
        bottom: '',
        left: '',
        right: ''
      }
    });
    dialogRef.afterClosed().subscribe(res => {console.log(res); if (res !== undefined){
      this.listaProductos = res; this.cliente.carrito = res }
      else{
        this.listaProductos = [];
        this.cliente.carrito = [];
      }
    });
  }
  ngOnInit(): void {
  }

}
