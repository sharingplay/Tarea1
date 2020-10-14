import { Component, OnInit } from '@angular/core';
import {HttpClientService} from '../../../services/http-client-service';
import {BsModalRef, BsModalService} from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-solicitud-afiliacion',
  templateUrl: './solicitud-afiliacion.component.html',
  styleUrls: ['./solicitud-afiliacion.component.scss']
})
export class SolicitudAfiliacionComponent implements OnInit {
  constructor(public httpService: HttpClientService, public modalService: BsModalService) { }
  bsModalRef: BsModalRef;
  ngOnInit(): void {
  }

  // Toma los datos del form y los convierte a Json para agregarlos a la lista de solicitudes
  enviarSolicitud(): void{
    var solicitudNueva = {
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
      "sinpe": (document.getElementById('Sinpe') as HTMLInputElement).value
    };
    console.log(solicitudNueva);
    //Agrega la cuenta al Json de solicitud de afiliaciones
    this.httpService.post('https://localhost:5001/api/Afiliaciones/insert', solicitudNueva);
  }

}
