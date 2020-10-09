import {Component, Input, OnInit} from '@angular/core';
import {AfiliationInfoModalComponent} from '../../../components/afiliation-info-modal/afiliation-info-modal.component';
import {BsModalRef, BsModalService} from 'ngx-bootstrap/modal';
import { HttpClientService } from '../../../services/http-client-service';

@Component({
  selector: 'app-administracion-afiliaciones',
  templateUrl: './administracion-afiliaciones.component.html',
  styleUrls: ['./administracion-afiliaciones.component.scss']
})
export class AdministracionAfiliacionesComponent implements OnInit {

  constructor( private modalService: BsModalService, public  hhtpService: HttpClientService) { }
  bsModalRef: BsModalRef;

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  showAffiliationInfo(productor){
    const initialState = {
      productorPropio: productor
    };
    this.bsModalRef = this.modalService.show(AfiliationInfoModalComponent, {initialState});
    this.bsModalRef.content.closeBtnName = 'Close';
  }
}
