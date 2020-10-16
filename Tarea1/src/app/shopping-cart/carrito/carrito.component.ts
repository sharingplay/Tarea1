import {AfterViewInit, Component, Inject, OnInit, ViewChildren} from '@angular/core';
import {FormControl, ReactiveFormsModule, Validators} from '@angular/forms';
import {getTemplateUrl} from 'codelyzer/util/ngQuery';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {HttpClientService} from '../../services/http-client-service';
import {HttpClient, HttpResponse} from '@angular/common/http';
import { DatePipe } from '@angular/common';
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
  fecha = new Date().toDateString();
  constructor(private datePipe: DatePipe, public dialogRef: MatDialogRef<CarritoComponent>, @Inject(MAT_DIALOG_DATA) public message: HttpClientService['productos'],
              private httpService: HttpClient, private http: HttpClientService)

  {dialogRef.disableClose = true; console.log(message);
  this.fecha = this.datePipe.transform(this.fecha, 'dd-MM-yyyy');
  this.usuario = message;
  this.productos = this.message.carrito;
  }
  @ViewChildren(CarritoComponent) viewChild: CarritoComponent;
  updateTotal(): void{
    console.log(this.productos);
    if (this.productos !== undefined){
      this.subTotal = 0;
      for (const prod of this.productos){
        const cantidad = (document.getElementById(prod.nombre) as HTMLInputElement).value;
        this.subTotal += Number(cantidad) * Number(prod.precio);
        prod.cantidad = cantidad;
        if (Number(prod.disponibilidad) - Number(cantidad) < 0){
          alert("Lo sentimos, no hay más disponibles por el momento")
        }
      }
      this.usuario.carrito = this.productos;
      console.log(this.usuario.carrito);
      this.httpService.post('https://localhost:5001/api/Clientes/modify', this.usuario);
      (console.log(this.subTotal));
    }
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

  comprar():void{
    let lista=[];
    for (let prod of this.usuario.carrito){
      if (prod.productor != this.usuario.carrito[0].productor){
        alert("Lo sentimos, de momento solo se pueden hacer compras de un productor a la vez.");
        return;
      }
      prod.disponibilidad = (prod.disponibilidad - prod.cantidad).toString();
      const temp = prod;
      temp.cantidad = "0";
      console.log(temp);
      this.http.post('https://localhost:5001/api/Productos/modify', temp);
      lista = lista.concat(prod);
    }
    this.http.post('https://localhost:5001/api/Pedidos/insert',
      {Listado: lista, Nombre: this.usuario.nombre, Apellido: this.usuario.apellido, Direccion: this.usuario.direccion,
        Provincia: this.usuario.provincia, Canton: this.usuario.canton, Distrito: this.usuario.distrito, Cedula: this.usuario.cedula, Fecha: this.fecha,
        Telefono: this.usuario.telefono, Productor: this.usuario.carrito[0].productor, Comentarios: (document.getElementById('notas') as HTMLInputElement).value });
        this.usuario.carrito = [];
        this.productos = [];
        this.http.post('https://localhost:5001/api/Clientes/modify', this.usuario);
    alert("Gracias! Su pedido ha sido registrado.")
  }

  ngAfterViewInit(): void{
    this.updateTotal();
  }
  ngOnInit(): void {
  }
}
