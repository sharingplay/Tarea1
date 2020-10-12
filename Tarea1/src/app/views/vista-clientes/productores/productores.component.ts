import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import {HttpClientService} from '../../../services/http-client-service';
import {BsModalService, BsModalRef} from 'ngx-bootstrap/modal';


@Component({
  selector: 'app-productores',
  templateUrl: './productores.component.html',
  styleUrls: ['./productores.component.scss']
})
export class ProductoresComponent implements OnInit {
  constructor(public httpService: HttpClientService, public modalService: BsModalService) {
  }
  bsModalRef: BsModalRef;
  ngOnInit(): void {
  }

}
