import {Component, Inject, OnInit} from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { Router } from '@angular/router';
import {JsonArray} from '@angular/compiler-cli/ngcc/src/packages/entry_point';
import {HttpClientService} from '../../../../services/http-client-service';
// import {GuardService}from '.././guard.service';
declare const fileDropArea: any;
declare const myTest: any;
let flag = true;


@Component({
  selector: 'app-detalles-pedidos',
  templateUrl: './detalles-pedidos.component.html',
  styleUrls: ['./detalles-pedidos.component.scss']
})
export class DetallesPedidosComponent implements OnInit {
  constructor(public dialogRef: MatDialogRef<DetallesPedidosComponent>,
              @Inject(MAT_DIALOG_DATA) public message: HttpClientService['pedidos']) {console.log(message); }

  // tslint:disable-next-line:typedef
  onClicka(){
    if (flag){
      fileDropArea();
      flag = false;
    }
  }


  ngOnInit(): void {
  }

}
