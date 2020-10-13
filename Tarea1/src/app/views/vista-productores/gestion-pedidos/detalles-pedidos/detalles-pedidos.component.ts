import {Component, Inject, OnInit} from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { Router } from '@angular/router';
import {JsonArray} from '@angular/compiler-cli/ngcc/src/packages/entry_point';
import {HttpClientService} from '../../../../services/http-client-service';
declare const fileDropArea: any;
let flag = true;


@Component({
  selector: 'app-detalles-pedidos',
  templateUrl: './detalles-pedidos.component.html',
  styleUrls: ['./detalles-pedidos.component.scss']
})
export class DetallesPedidosComponent implements OnInit {
  constructor(public dialogRef: MatDialogRef<DetallesPedidosComponent>,
              @Inject(MAT_DIALOG_DATA) public message: HttpClientService['pedidos']) {console.log(message); }
  total = 0;
  productos = this.message.listado;
  // tslint:disable-next-line:typedef
  onClicka(){
    if (flag){
      fileDropArea();
      flag = false;
    }
  }

  ngOnInit(): void {
    // tslint:disable-next-line:forin
    for (let prod of this.message.listado){
      this.total += Number(prod[2]) * Number(prod[3]);
    }
  }
}

