import {Component, Input, OnInit} from '@angular/core';
import {HttpClientService} from '../../../../../services/http-client-service';
import {BsModalService} from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-products-per-producer',
  templateUrl: './products-per-producer.component.html',
  styleUrls: ['./products-per-producer.component.scss']
})
export class ProductsPerProducerComponent implements OnInit {
  producers: any;

  constructor( private modalService: BsModalService, public  hhtpService: HttpClientService  ) {
  }

  ngOnInit(): void {
  }

}
