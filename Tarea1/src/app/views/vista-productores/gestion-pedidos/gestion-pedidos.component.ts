import { Component, OnInit } from '@angular/core';
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
  pedidos: string[][] = [['Miguel Rodríguez Ulate', 'San Ramon Centro', '11400', '70558402', 'Del perimercados 100 este y 100 norte, frente al colegio Patriarca', '10000001'], ['Ana Barrantes Ramírez', 'Piedades Sur', '20500', '24455400', 'De la iglesia de Piedades Sur 200 metros hacia adentro, casa verde pastel', '10000002'], ['Angel Salas Ureña', 'San Isidro', '40875', '89612825', ' De la cantina 80 metros al sur', '10000003'], ['Mariana Valenciano Arias', 'San Juan', '50700', '84066623', ' De la plaza 500m hasta topar con cerca, casa de verjas negras al lado izquierdo', '10000004']];

  constructor(public dialog: MatDialog, public  hhtpService: HttpClientService, private modalService: BsModalService) { }
  bsModalRef: BsModalRef;

  ngOnInit(): void {
  }

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

  // tslint:disable-next-line:typedef
  openModalWithComponent() {
    const initialState = {
    };
    this.bsModalRef = this.modalService.show(DeleteCategoryModalComponent, {initialState});
    this.bsModalRef.content.closeBtnName = 'Close';
  }
}
