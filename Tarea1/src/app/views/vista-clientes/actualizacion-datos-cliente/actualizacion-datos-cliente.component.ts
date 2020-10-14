import { Component, OnInit } from '@angular/core';
import {HttpClientService} from '../../../services/http-client-service';
import {BsModalRef, BsModalService} from 'ngx-bootstrap/modal';
@Component({
  selector: 'app-actualizacion-datos-cliente',
  templateUrl: './actualizacion-datos-cliente.component.html',
  styleUrls: ['./actualizacion-datos-cliente.component.scss']
})
export class ActualizacionDatosClienteComponent implements OnInit {

  constructor(public httpService: HttpClientService, public modalService: BsModalService) {
  }
  bsModalRef: BsModalRef;
  ngOnInit(): void {
  }
  delete(cliente): void{
    console.log(cliente);
    this.httpService.post('https://localhost:5001/api/Clientes/delete', cliente);
    window.location.reload();
  }
}
