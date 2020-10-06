import { Component, OnInit } from '@angular/core';
import { CategoriasService } from '../../../services/categorias.service';
import { DeleteCategoryModalComponent } from '../../../components/delete-category-modal/delete-category-modal.component';
import { CreateCategoryModalComponent } from '../../../components/create-category-modal/create-category-modal.component';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-gestion-categorias',
  templateUrl: './gestion-categorias.component.html',
  styleUrls: ['./gestion-categorias.component.scss']
})
export class GestionCategoriasComponent implements OnInit {
  constructor( public  categoriasService: CategoriasService, private modalService: BsModalService) {}
  bsModalRef: BsModalRef;
  categories = [['Carnes', 'car01'], ['Legumbres', 'leg01'], ['Mariscos', 'mar01'], ['Hortalizas', 'hor01']];

  // tslint:disable-next-line:typedef
  openModalWithComponent() {
    const initialState = {
      title: 'Modal with component'
    };
    this.bsModalRef = this.modalService.show(DeleteCategoryModalComponent, {initialState});
    this.bsModalRef.content.closeBtnName = 'Close';
  }

  // tslint:disable-next-line:typedef
  addCategory(){
    const initialState = {
      title: 'Modal with component'
    };
    this.bsModalRef = this.modalService.show(CreateCategoryModalComponent, {initialState});
    this.bsModalRef.content.closeBtnName = 'Close';
  }

  ngOnInit(): void {
  }

}
