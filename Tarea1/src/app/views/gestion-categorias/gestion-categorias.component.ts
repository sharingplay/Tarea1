import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gestion-categorias',
  templateUrl: './gestion-categorias.component.html',
  styleUrls: ['./gestion-categorias.component.scss']
})
export class GestionCategoriasComponent implements OnInit {
  categories = [['Verduras', 'ver01'], ['Carnes', 'car01'], ['Legumbres', 'leg01'], ['Mariscos', 'mar01'], ['Hortalizas', 'hor01']];
  constructor() { }

  ngOnInit(): void {
  }

}
