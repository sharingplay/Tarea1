import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {CarritoComponent} from '../../../shopping-cart/carrito/carrito.component';
import {HttpClientService} from '../../../services/http-client-service';
import {BsModalService, BsModalRef} from 'ngx-bootstrap/modal';
import {DetallesPedidosComponent} from '../../vista-productores/gestion-pedidos/detalles-pedidos/detalles-pedidos.component';
import {ActivatedRoute} from '@angular/router';
import {HttpClient, HttpResponse} from '@angular/common/http';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss']
})
export class ProductosComponent implements OnInit {
  usuario: string;
  productor: string;
  productos: any;
  cliente: any;
  constructor(public dialog: MatDialog, public httpService: HttpClient, private route: ActivatedRoute, private http: HttpClientService) {
    const user = +this.route.snapshot.paramMap.get('usuario');
    const prod = +this.route.snapshot.paramMap.get('productor');
    this.usuario = user.toString();
    this.productor = prod.toString();
    this.httpService.post('https://localhost:5001/api/Productos/GetPorProductor', { Productor: this.productor}).subscribe(
      (resp: HttpResponse<any>) => { this.productos = resp; });
    this.httpService.post('https://localhost:5001/api/Clientes/getUser', { Cedula: this.usuario}).subscribe(
      (resp: HttpResponse<any>) => { this.cliente = resp; });
  }
  listaProductos: object[] = [];
  bsModalRef: BsModalRef;
  openDialog(productos: object[]): void {
    if (this.cliente.carrito !=  null){
      this.listaProductos = this.listaProductos.concat(this.cliente.carrito);
    }
    this.cliente.carrito = this.listaProductos;
    this.http.post('https://localhost:5001/api/Clientes/modify', this.cliente);
    console.log(this.cliente);
    const dialogRef = this.dialog.open(CarritoComponent, {
      width: '70%',
      height: '70%',
      data: this.cliente.cedula,
      position: {
        top: '',
        bottom: '',
        left: '',
        right: ''
      }
    });
    dialogRef.afterClosed().subscribe(res => {console.log(res); if (res != null){
      this.listaProductos = res; }
      else{
        this.listaProductos = []; }
    });
  }
  ngOnInit(): void {
  }

}
