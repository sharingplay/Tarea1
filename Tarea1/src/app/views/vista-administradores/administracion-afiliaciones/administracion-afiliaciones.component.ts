import { Component, OnInit } from '@angular/core';
import {MoreInfoAfiliationModalComponent} from '../../../components/more-info-afiliation-modal/more-info-afiliation-modal.component';
import {BsModalRef, BsModalService} from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-administracion-afiliaciones',
  templateUrl: './administracion-afiliaciones.component.html',
  styleUrls: ['./administracion-afiliaciones.component.scss']
})
export class AdministracionAfiliacionesComponent implements OnInit {

  constructor( private modalService: BsModalService) { }
  bsModalRef: BsModalRef;

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  addCategory(){
    const initialState = {
    };
    this.bsModalRef = this.modalService.show(MoreInfoAfiliationModalComponent, {initialState});
    this.bsModalRef.content.closeBtnName = 'Close';
  }
}
