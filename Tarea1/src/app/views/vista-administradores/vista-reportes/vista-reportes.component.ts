import { Component, OnInit } from '@angular/core';
import { ListViewModalComponent } from './components/list-view-modal/list-view-modal.component';
import {BsModalRef, BsModalService} from 'ngx-bootstrap/modal';
import {HttpClientService} from '../../../services/http-client-service';

@Component({
  selector: 'app-vista-reportes',
  templateUrl: './vista-reportes.component.html',
  styleUrls: ['./vista-reportes.component.scss']
})
export class VistaReportesComponent implements OnInit {

  constructor( private modalService: BsModalService, public  hhtpService: HttpClientService ) { }
  bsModalRef: BsModalRef;

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  showReport(lista, titulo){
    const initialState = {
      infoList: lista,
      title: titulo,
    };
    this.bsModalRef = this.modalService.show(ListViewModalComponent, {initialState});
    this.bsModalRef.content.closeBtnName = 'Close';
  }

}
