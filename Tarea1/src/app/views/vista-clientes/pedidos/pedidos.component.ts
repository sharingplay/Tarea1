import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {HttpClientService} from '../../../services/http-client-service';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {MessengerService} from '../../../MessengerService';
import {BsModalRef} from 'ngx-bootstrap/modal';
import {DetallesPedidosComponent} from '../../vista-productores/gestion-pedidos/detalles-pedidos/detalles-pedidos.component';
import {PedidoClientesComponent} from './pedido-clientes/pedido-clientes.component';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.scss']
})
export class PedidosComponent implements OnInit {

  total = 0;
  pedidos: any;
  cliente: any;
  constructor(public dialog: MatDialog, public  httpService: HttpClientService, public http: HttpClient, private messengerService: MessengerService) {
    this.messengerService.message.subscribe(value => {this.cliente = value});
    this.http.post('https://localhost:5001/api/Pedidos/getPedidoCliente', { Cedula: this.cliente.cedula}).subscribe(
      (resp: HttpResponse<any>) => { this.pedidos = resp; console.log(resp); });
  }
  bsModalRef: BsModalRef;
  openDialog(pedido: object[]): void {
    const dialogRef = this.dialog.open(PedidoClientesComponent, {
      width: '70%',
      height: '70%',
      data: pedido,
      position: {
        top: '',
        bottom: '',
        left: '',
        right: ''
      }
    });
    dialogRef.afterClosed().subscribe(res => { this.http.post('https://localhost:5001/api/Pedidos/getPedidoCliente', { Cedula: this.cliente.cedula}).subscribe(
      (resp: HttpResponse<any>) => { this.pedidos = resp; console.log(resp); });});
  }
  ngOnInit(): void {}

}
