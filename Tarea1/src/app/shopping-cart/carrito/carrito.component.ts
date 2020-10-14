import {AfterViewInit, Component, Inject, OnInit, ViewChildren} from '@angular/core';
import {FormControl, ReactiveFormsModule, Validators} from '@angular/forms';
import {getTemplateUrl} from 'codelyzer/util/ngQuery';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {HttpClientService} from '../../services/http-client-service';
import {HttpClient, HttpResponse} from '@angular/common/http';
let flag = true;

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.scss']
})
export class CarritoComponent implements OnInit, AfterViewInit {
  subTotal = 0;
  usuario: any;
  productos: any;
  constructor(public dialogRef: MatDialogRef<CarritoComponent>, @Inject(MAT_DIALOG_DATA) public message: HttpClientService['productos'],
              private httpService: HttpClient, private http: HttpClientService)
  // tslint:disable-next-line:max-line-length
  {dialogRef.disableClose = true; console.log(message); this.httpService.post('https://localhost:5001/api/Clientes/getUser', { Cedula: message}).subscribe(
    (resp: HttpResponse<any>) => { this.usuario = resp; this.productos = this.usuario.carrito; console.log(this.productos); }); }
  @ViewChildren(CarritoComponent) viewChild: CarritoComponent;
  updateTotal(): void{
    this.subTotal = 0;
    for (const prod of this.productos){
      const cantidad = (document.getElementById(prod.nombre) as HTMLInputElement).value;
      this.subTotal += Number(cantidad) * Number(prod.precio);
    }
    (console.log(this.subTotal));
  }
  update(): void{
    if (flag){
      for (const prod of this.productos){
        this.subTotal += Number(prod.precio);
      }
      flag = false;
    }
  }

  remove(prod: any): void{
    const index = this.productos.indexOf(prod, 0);
    if (index > -1) {
      this.productos.splice(index, 1);
      console.log(this.productos);
    }
    this.usuario.carrito = this.productos;
    console.log(this.usuario.carrito);
    this.http.post('https://localhost:5001/api/Clientes/modify', this.usuario);
  }

  ngAfterViewInit(): void{
    this.updateTotal();
  }
  ngOnInit(): void {
  }
}
