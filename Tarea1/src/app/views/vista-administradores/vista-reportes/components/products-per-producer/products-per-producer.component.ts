import {Component, Input, OnInit} from '@angular/core';
import {HttpClientService} from '../../../../../services/http-client-service';
import {BsModalRef, BsModalService} from 'ngx-bootstrap/modal';
import {ListViewModalComponent} from "../list-view-modal/list-view-modal.component";

@Component({
  selector: 'app-products-per-producer',
  templateUrl: './products-per-producer.component.html',
  styleUrls: ['./products-per-producer.component.scss']
})
export class ProductsPerProducerComponent implements OnInit {
  producers: any;

  constructor( private modalService: BsModalService, public  hhtpService: HttpClientService  ) {
  }
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
