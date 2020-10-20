import {Component, Input, OnInit} from '@angular/core';
import {HttpClientService} from '../../services/http-client-service';


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
    this.httpClient.post(HttpClientService.URL + 'Productores/insert',
     {
       Cedula: this.productorPropio.cedula,
       Apellidos: this.productorPropio.apellidos,
       Canton: this.productorPropio.canton,
       Direccion: this.productorPropio.direccion,
       Distrito: this.productorPropio.distrito,
       Nacimiento: this.productorPropio.nacimiento,
       Nombre: this.productorPropio.nombre,
       Password: this.productorPropio.password,
       Provincia: this.productorPropio.provincia,
       SINPE: this.productorPropio.sinpe,
       Telefono: this.productorPropio.telefono,
       Usuario: this.productorPropio.usuario
     });
    this.httpClient.post(HttpClientService.URL + 'Afiliaciones/delete', {Cedula: this.productorPropio.cedula});
    window.location.reload();
  }
  rechazar(): void {
    // tslint:disable-next-line:prefer-const
    this.httpClient.post(HttpClientService.URL + 'Afiliaciones/delete',
      {Cedula: this.productorPropio.cedula});
    window.location.reload();
  }
}
