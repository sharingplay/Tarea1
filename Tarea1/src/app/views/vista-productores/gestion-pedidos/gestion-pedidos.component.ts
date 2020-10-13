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
  post(): void{
    const json = {
      listado: [
        [
          'Bananos',
          'Ban01',
          '980',
          '3'
        ],
        [
          'Carne',
          'Car02',
          '2750',
          '2'
        ]
      ],
      comprobante: '65857412',
      direccion: 'Heredia',
      cedula: '22132000',
      nombre: 'Miguel',
      apellido: 'Lagos',
      telefono: '88741520'
    };
    this.httpService.post('https://localhost:5001/api/Pedidos/insert', json);
  }

  ngOnInit(): void {
    console.log(this.httpService.pedidos.nombre);
    // tslint:disable-next-line:forin
    for (const prod of this.httpService.pedidos.listado){
      this.total += Number(prod[2]) * Number(prod[3]);
    }
  }
}
