import {Component, Input, OnInit} from '@angular/core';
import {HttpClientService} from "../../services/http-client-service";


@Component({
  selector: 'app-afiliation-info-modal',
  templateUrl: './afiliation-info-modal.component.html',
  styleUrls: ['./afiliation-info-modal.component.scss']
})
export class AfiliationInfoModalComponent implements OnInit {
  productorPropio: any;
  constructor(public httpClient: HttpClientService) {}

  ngOnInit(): void {
  }
  aceptar(): void {
    // tslint:disable-next-line:prefer-const
    this.httpClient.post(HttpClientService.URL + 'Productores/insert', this.productorPropio);
    this.httpClient.post(HttpClientService.URL + 'Afiliaciones/delete', {Cedula: this.productorPropio.cedula});
    window.location.reload();
  }
  rechazar(): void {
    // tslint:disable-next-line:prefer-const
    this.httpClient.post(HttpClientService.URL + 'Afiliaciones/delete',
      {Cedula: this.productorPropio.cedula});
    console.log({Cedula: this.productorPropio.cedula});
    window.location.reload();
  }
}
