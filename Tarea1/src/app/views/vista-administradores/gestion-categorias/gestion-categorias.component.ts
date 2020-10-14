import { Component, OnInit } from '@angular/core';
import { HttpClientService } from '../../../services/http-client-service';
import { DeleteCategoryModalComponent } from '../../../components/delete-category-modal/delete-category-modal.component';
import { CreateCategoryModalComponent } from '../../../components/create-category-modal/create-category-modal.component';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-gestion-categorias',
  templateUrl: './gestion-categorias.component.html',
  styleUrls: ['./gestion-categorias.component.scss']
})
export class GestionCategoriasComponent implements OnInit {
  constructor(public  hhtpService: HttpClientService, private modalService: BsModalService) {}
  bsModalRef: BsModalRef;

  // tslint:disable-next-line:typedef
  openModalWithComponent(deleteFunction) {
    const initialState = {
      whoDelete: deleteFunction
    };
    this.bsModalRef = this.modalService.show(DeleteCategoryModalComponent, {initialState});
    this.bsModalRef.content.closeBtnName = 'Close';
  }

  // tslint:disable-next-line:typedef
  addCategory(){
    const initialState = {
    };
    this.bsModalRef = this.modalService.show(CreateCategoryModalComponent, {initialState});
    this.bsModalRef.content.closeBtnName = 'Close';
  }

  ngOnInit(): void {
  }

}
