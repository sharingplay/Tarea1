import {Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {DetallesPedidosComponent} from './detalles-pedidos/detalles-pedidos.component';
import {HttpClientService} from '../../../services/http-client-service';
import {DeleteCategoryModalComponent} from '../../../components/delete-category-modal/delete-category-modal.component';
import {BsModalRef, BsModalService} from 'ngx-bootstrap/modal';
import {MessengerService} from '../../../MessengerService';
import {HttpClient, HttpResponse} from '@angular/common/http';

@Component({
  selector: 'app-gestion-pedidos',
  templateUrl: './gestion-pedidos.component.html',
  styleUrls: ['./gestion-pedidos.component.scss']
})
export class GestionPedidosComponent implements OnInit {
  total = 0;
  pedidos: any;
  productor: any;
  constructor(public dialog: MatDialog, public  httpService: HttpClientService, public http: HttpClient, private messengerService: MessengerService) {
    this.messengerService.message.subscribe(value => {this.productor = value});
    this.http.post('http://localhost/server/api/Pedidos/getPedido', { Productor: this.productor.cedula}).subscribe(
      (resp: HttpResponse<any>) => { this.pedidos = resp; console.log(resp); });
  }
  bsModalRef: BsModalRef;
  openDialog(pedido: object[]): void {
      const dialogRef = this.dialog.open(DetallesPedidosComponent, {
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
      dialogRef.afterClosed().subscribe(res => { this.http.post('http://localhost/server/api/Pedidos/getPedido', { Productor: this.productor.cedula}).subscribe(
        (resp: HttpResponse<any>) => { this.pedidos = resp; console.log(resp); });});
  }

  ngOnInit(): void {}
}
