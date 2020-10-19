import { Component, OnInit } from '@angular/core';
import {HttpClientService} from '../../../services/http-client-service';
import {BsModalRef, BsModalService} from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-creacion-cuenta-cliente',
  templateUrl: './creacion-cuenta-cliente.component.html',
  styleUrls: ['./creacion-cuenta-cliente.component.scss']
})
export class CreacionCuentaClienteComponent implements OnInit {

  constructor(public httpService: HttpClientService, public modalService: BsModalService) { }
  bsModalRef: BsModalRef;

  ngOnInit(): void {
  }
  // Agrega la nueva cuenta del cliente al Json de Clientes
  agregarCliente(): void{
    var clienteNuevo = {
      "nombre": (document.getElementById('FirstName') as HTMLInputElement).value,
      "apellidos": (document.getElementById('LastName') as HTMLInputElement).value,
      "cedula": (document.getElementById('Cedula') as HTMLInputElement).value,
      "provincia": (document.getElementById('Provincia') as HTMLInputElement).value,
      "canton": (document.getElementById('Canton') as HTMLInputElement).value,
      "distrito": (document.getElementById('Distrito') as HTMLInputElement).value,
      "usuario": (document.getElementById('Usuario') as HTMLInputElement).value,
      "password": (document.getElementById('Password') as HTMLInputElement).value,
      "nacimiento": (document.getElementById('FechaNacimiento') as HTMLInputElement).value,
      "telefono": (document.getElementById('PhoneNumber') as HTMLInputElement).value,
    };
    console.log(clienteNuevo);
    // Agrega el cliente al json
    this.httpService.post('http://localhost/server/api/Clientes/insert', clienteNuevo);
  }
}
