import {AfterViewInit, Component, OnInit, ViewChildren} from '@angular/core';
import {FormControl, ReactiveFormsModule, Validators} from '@angular/forms';
import {getTemplateUrl} from 'codelyzer/util/ngQuery';
let flag = true;

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.scss']
})
export class CarritoComponent implements OnInit, AfterViewInit {
  subTotal = 0;
  productos: string[][] = [['Racimo Bananos', '3', 'Racimo de bananos', '1000', 'ban'], ['Fresas', '2', 'Fresas del Poás', '1500', 'fres']];
  constructor() { }
  @ViewChildren(CarritoComponent) viewChild: CarritoComponent;
  updateTotal(): void{
    this.subTotal = 0;
    for (const prod of this.productos){
      prod[1] = (document.getElementById(prod[4]) as HTMLInputElement).value;
      this.subTotal += Number(prod[1]) * Number(prod[3]);
    }
    (console.log(this.subTotal));
  }
  update(): void{
    if (flag){
      for (const prod of this.productos){
        this.subTotal += Number(prod[1]) * Number(prod[3]);
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
