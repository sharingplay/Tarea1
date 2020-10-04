import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss']
})
export class ProductosComponent implements OnInit {
  productos: string[][] = [['banano', '1000', '5'], ['fresa', '1500', '7'], ['chayote', '300', '15'], ['camote', '100', '30']];
  constructor() { }

  ngOnInit(): void {
  }

}
