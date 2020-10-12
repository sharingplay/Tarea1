import {Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {DetallesPedidosComponent} from './detalles-pedidos/detalles-pedidos.component';
import {HttpClientService} from '../../../services/http-client-service';
import {DeleteCategoryModalComponent} from '../../../components/delete-category-modal/delete-category-modal.component';
import {BsModalRef, BsModalService} from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-gestion-pedidos',
  templateUrl: './gestion-pedidos.component.html',
  styleUrls: ['./gestion-pedidos.component.scss']
})
export class GestionPedidosComponent implements OnInit {
  total = 0;
  constructor(public dialog: MatDialog, public  httpService: HttpClientService) { }
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
      dialogRef.afterClosed().subscribe(res => {console.log(res); });
  }
  ngOnInit(): void {
    console.log(this.httpService.pedidos.nombre);
    // tslint:disable-next-line:forin
    for (let prod of this.httpService.pedidos.listado){
      this.total += Number(prod[2]) * Number(prod[3]);
    }
  }
}
