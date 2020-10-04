import { Component, OnInit } from '@angular/core';
import { CategoriasService } from '../../../services/categorias.service';
@Component({
  selector: 'app-gestion-categorias',
  templateUrl: './gestion-categorias.component.html',
  styleUrls: ['./gestion-categorias.component.scss']
})
export class GestionCategoriasComponent implements OnInit {
  categories = [['Carnes', 'car01'], ['Legumbres', 'leg01'], ['Mariscos', 'mar01'], ['Hortalizas', 'hor01']];
  constructor( public  categoriasService: CategoriasService) {
    console.log(categoriasService.info);
  }

  ngOnInit(): void {
  }

}
