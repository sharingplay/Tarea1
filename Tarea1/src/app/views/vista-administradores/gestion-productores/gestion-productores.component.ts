import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gestion-productores',
  templateUrl: './gestion-productores.component.html',
  styleUrls: ['./gestion-productores.component.scss']
})
export class GestionProductoresComponent {
  productos: string[] = ['fresa', 'uva', 'yuca', 'papa', 'chayote', 'queso', 'naranja'];
  // precios: number[] = [100, 200, 500, 1000, 300];
  constructor() { }
}
