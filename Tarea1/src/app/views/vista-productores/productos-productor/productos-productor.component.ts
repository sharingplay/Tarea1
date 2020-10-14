import { Component, OnInit } from '@angular/core';
import {HttpClientService} from '../../../services/http-client-service';
import {BsModalRef, BsModalService} from 'ngx-bootstrap/modal';
import {MatDialog} from '@angular/material/dialog';
import {HttpResponse} from '@angular/common/http';
import{GestionProductosComponent} from '../gestion-productos/gestion-productos.component';

@Component({
  selector: 'app-productos-productor',
  templateUrl: './productos-productor.component.html',
  styleUrls: ['./productos-productor.component.scss']
})
export class ProductosProductorComponent implements OnInit {

  constructor(public httpService: HttpClientService, public modalService: BsModalService, public dialog: MatDialog) { }
  openDialog(producto: object[]): void {
    const dialogRef = this.dialog.open(GestionProductosComponent, {
      width: '70%',
      height: '70%',
      data: producto,
      position: {
        top: '',
        bottom: '',
        left: '',
        right: ''
      }
    });
    dialogRef.afterClosed().subscribe(res => {console.log(res); });
  }
  // Elimina un productor enviado en formato Json al pulsar el boton de este
  delete(producto): void{
    console.log(producto);
    this.httpService.post('https://localhost:5001/api/Productos/delete', producto);
    window.location.reload();
  }
  ngOnInit(): void {
  }

}
