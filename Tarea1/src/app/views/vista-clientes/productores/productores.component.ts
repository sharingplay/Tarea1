import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import {HttpClientService} from '../../../services/http-client-service';
import {BsModalService, BsModalRef} from 'ngx-bootstrap/modal';
import {ActivatedRoute} from '@angular/router';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {MessengerService} from '../../../MessengerService';


@Component({
  selector: 'app-productores',
  templateUrl: './productores.component.html',
  styleUrls: ['./productores.component.scss']
})
export class ProductoresComponent implements OnInit {
  productores: any;
  cliente: any;
  // tslint:disable-next-line:max-line-length
  constructor(public httpService: HttpClientService, public modalService: BsModalService, private route: ActivatedRoute, private http: HttpClient, private messengerService: MessengerService) {
    this.messengerService.message.subscribe(value => {this.cliente = value});
    http.post('https://localhost:5001/api/Productores/GetRegion', {Canton: this.cliente.canton}).subscribe((ans: HttpResponse<any>) => {this.productores = ans; });
    // tslint:disable-next-line:max-line-length
  }
  bsModalRef: BsModalRef;
  ngOnInit(): void {
  }

}
