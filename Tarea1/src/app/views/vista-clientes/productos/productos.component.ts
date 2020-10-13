import { Component, OnInit } from '@angular/core';
import {HttpClientService} from '../../../services/http-client-service';
import {BsModalService, BsModalRef} from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss']
})
export class ProductosComponent implements OnInit {
  productos: string[][] = [['banano', '1000', '5'], ['fresa', '1500', '7'], ['chayote', '300', '15'], ['camote', '100', '30'],
    ['Sandia', '100', '30'],['Cereza', '100', '30'],['tomate', '100', '30'],['guineo', '100', '30']];
  constructor(public httpService: HttpClientService, public modalService: BsModalService) {
  }
  bsModalRef: BsModalRef;
  ngOnInit(): void {
  }

}
