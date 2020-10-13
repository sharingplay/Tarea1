import {AfterViewInit, Component, Inject, OnInit, ViewChildren} from '@angular/core';
import {FormControl, ReactiveFormsModule, Validators} from '@angular/forms';
import {getTemplateUrl} from 'codelyzer/util/ngQuery';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {HttpClientService} from '../../services/http-client-service';
let flag = true;

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.scss']
})
export class CarritoComponent implements OnInit, AfterViewInit {
  subTotal = 0;
  productos: string[][] = [['Racimo Bananos', '3', 'Racimo de bananos', '1000', 'ban'], ['Fresas', '2', 'Fresas del Poás', '1500', 'fres']];
  constructor(public dialogRef: MatDialogRef<CarritoComponent>, @Inject(MAT_DIALOG_DATA) public message: HttpClientService['productos'])
  {console.log(message); }
  @ViewChildren(CarritoComponent) viewChild: CarritoComponent;
  updateTotal(): void{
    this.subTotal = 0;
    for (const prod of this.message){
      const cantidad = (document.getElementById(prod.nombre) as HTMLInputElement).value;
      this.subTotal += Number(cantidad) * Number(prod.precio);
    }
    (console.log(this.subTotal));
  }
  update(): void{
    if (flag){
      for (const prod of this.productos){
        this.subTotal += Number(prod[3]);
      }
      flag = false;
    }
  }

  ngAfterViewInit(): void{
    this.updateTotal();
  }
  ngOnInit(): void {
  }
}
