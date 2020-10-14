import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import {HttpClientService} from '../../../services/http-client-service';
import {BsModalService, BsModalRef} from 'ngx-bootstrap/modal';
import {ActivatedRoute} from '@angular/router';
import {HttpClient, HttpResponse} from '@angular/common/http';


@Component({
  selector: 'app-productores',
  templateUrl: './productores.component.html',
  styleUrls: ['./productores.component.scss']
})
export class ProductoresComponent implements OnInit {
  usuario: string;
  productores: any;
  cliente: any;
  // tslint:disable-next-line:max-line-length
  constructor(public httpService: HttpClientService, public modalService: BsModalService, private route: ActivatedRoute, private http: HttpClient) {
    const user = +this.route.snapshot.paramMap.get('usuario');
    this.usuario = user.toString();
    // tslint:disable-next-line:max-line-length
    http.post('https://localhost:5001/api/Clientes/getUser', {Cedula: this.usuario}).subscribe((resp: HttpResponse<any>) => {this.cliente = resp;
    console.log(this.cliente);
    http.post('https://localhost:5001/api/Productores/GetRegion', {Canton: this.cliente.canton}).subscribe((ans: HttpResponse<any>) => {this.productores = ans; });
    });
    // tslint:disable-next-line:max-line-length
  }
  bsModalRef: BsModalRef;
  ngOnInit(): void {
  }

}
