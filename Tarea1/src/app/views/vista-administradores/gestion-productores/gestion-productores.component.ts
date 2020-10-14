import { Component, OnInit } from '@angular/core';
import {HttpClientService} from '../../../services/http-client-service';
import {BsModalRef, BsModalService} from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-gestion-productores',
  templateUrl: './gestion-productores.component.html',
  styleUrls: ['./gestion-productores.component.scss']
})
export class GestionProductoresComponent {
  constructor(public httpService: HttpClientService, public modalService: BsModalService) {
  }
  bsModalRef: BsModalRef;
  //Elimina un productor enviado en formato Json al pulsar el boton de este
  delete(productor): void{
    console.log(productor);
    this.httpService.post('https://localhost:5001/api/Productores/delete', productor);
    window.location.reload();
  }
}
