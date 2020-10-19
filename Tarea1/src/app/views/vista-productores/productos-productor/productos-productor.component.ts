import { Component, OnInit } from '@angular/core';
import {HttpClientService} from '../../../services/http-client-service';
import {BsModalRef, BsModalService} from 'ngx-bootstrap/modal';
import {MatDialog} from '@angular/material/dialog';
import {HttpClient, HttpResponse} from '@angular/common/http';
import{GestionProductosComponent} from '../gestion-productos/gestion-productos.component';
import {MessengerService} from '../../../MessengerService';

@Component({
  selector: 'app-productos-productor',
  templateUrl: './productos-productor.component.html',
  styleUrls: ['./productos-productor.component.scss']
})
export class ProductosProductorComponent implements OnInit {
  productos: any;
  productor:any;
  constructor(public httpService: HttpClientService, public http: HttpClient, private messengerService: MessengerService, public modalService: BsModalService, public dialog: MatDialog) {
    this.messengerService.message.subscribe(value => {
      console.log(value);
      this.productor = value;
    });
    http.post('hhttp://localhost/server/api/Productos/GetPorProductor', {Productor: this.productor.cedula}).subscribe((resp:any) => {this.productos = resp; console.log(resp)});
  }
  openDialog(producto: object[], modify: boolean): void {
    let param = [producto, modify, this.productor]
    const dialogRef = this.dialog.open(GestionProductosComponent, {
      width: '70%',
      height: '70%',
      data: param,
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
    this.httpService.post('http://localhost/server/api/Productos/delete', producto);
    window.location.reload();
  }
  ngOnInit(): void {
  }

}
