import { Component, OnInit } from '@angular/core';
import {HttpClientService} from '../../../services/http-client-service';
import {BsModalRef, BsModalService} from 'ngx-bootstrap/modal';
import {ActualizarProductoresComponent} from '../actualizar-productores/actualizar-productores.component';
import {MatDialog} from '@angular/material/dialog';

import {HttpResponse} from '@angular/common/http';

@Component({
  selector: 'app-gestion-productores',
  templateUrl: './gestion-productores.component.html',
  styleUrls: ['./gestion-productores.component.scss']
})
export class GestionProductoresComponent {
  constructor(public httpService: HttpClientService, public modalService: BsModalService, public dialog: MatDialog,) {
  }
  openDialog(productor: object[]): void {
    const dialogRef = this.dialog.open(ActualizarProductoresComponent, {
      width: '70%',
      height: '70%',
      data: productor,
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
  delete(productor): void{
    console.log(productor);
    this.httpService.post('https://localhost:5001/api/Productores/delete', productor);
    window.location.reload();
  }
}
