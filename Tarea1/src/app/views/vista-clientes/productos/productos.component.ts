import { Component, OnInit } from '@angular/core';
import {HttpClientService} from '../../../services/http-client-service';
import {BsModalService, BsModalRef} from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss']
})
export class ProductosComponent implements OnInit {
  constructor(public httpService: HttpClientService, public modalService: BsModalService) {
  }
  bsModalRef: BsModalRef;
  ngOnInit(): void {
  }

}
