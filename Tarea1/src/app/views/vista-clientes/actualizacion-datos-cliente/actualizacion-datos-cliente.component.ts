import { Component, OnInit } from '@angular/core';
import {HttpClientService} from '../../../services/http-client-service';
import {BsModalRef, BsModalService} from 'ngx-bootstrap/modal';
import {MessengerService} from "../../../MessengerService";

@Component({
  selector: 'app-actualizacion-datos-cliente',
  templateUrl: './actualizacion-datos-cliente.component.html',
  styleUrls: ['./actualizacion-datos-cliente.component.scss']
})
export class ActualizacionDatosClienteComponent implements OnInit {
  cliente: any;

  constructor(public httpService: HttpClientService, public modalService: BsModalService, private messengerService: MessengerService) {
    this.messengerService.message.subscribe(value => {this.cliente = value});
  }
  bsModalRef: BsModalRef;
  ngOnInit(): void {
  }

  actualizarDatosCliente(): void {
    this.cliente.nombre = (document.getElementById('FirstName') as HTMLInputElement).value;
    this.cliente.apellidos = (document.getElementById('LastName') as HTMLInputElement).value;
    this.cliente.provincia = (document.getElementById('Provincia') as HTMLInputElement).value;
    this.cliente.canton = (document.getElementById('Canton') as HTMLInputElement).value;
    this.cliente.distrito = (document.getElementById('Distrito') as HTMLInputElement).value;
    this.cliente.password = (document.getElementById('Password') as HTMLInputElement).value;
    this.cliente.telefono = (document.getElementById('PhoneNumber') as HTMLInputElement).value;
    this.httpService.post('https://localhost:5001/api/Clientes/modify', this.cliente);
  }

  delete(cliente): void{
    console.log(cliente);
    this.httpService.post('https://localhost:5001/api/Clientes/delete', cliente);
  }
}
