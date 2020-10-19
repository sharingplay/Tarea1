import { Component, OnInit } from '@angular/core';
import {HttpClientService} from '../../../services/http-client-service';
import {BsModalRef, BsModalService} from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-actualizar-productores',
  templateUrl: './agregar-productores.component.html',
  styleUrls: ['./agregar-productores.component.scss']
})
export class AgregarProductoresComponent implements OnInit {

  constructor(public httpService: HttpClientService, public modalService: BsModalService) { }
  bsModalRef: BsModalRef;

  ngOnInit(): void {
  }

  // Funcion para agregar al Json de productores uno nuevo sin necesidad de validarlo
  agregarProductor(): void{
    let productorNuevo = {
      nombre: (document.getElementById('FirstName') as HTMLInputElement).value,
      apellidos: (document.getElementById('LastName') as HTMLInputElement).value,
      foto: (document.getElementById('foto') as HTMLInputElement).value,
      cedula: (document.getElementById('Cedula') as HTMLInputElement).value,
      provincia: (document.getElementById('Provincia') as HTMLInputElement).value,
      canton: (document.getElementById('Canton') as HTMLInputElement).value,
      distrito: (document.getElementById('Distrito') as HTMLInputElement).value,
      usuario: (document.getElementById('Usuario') as HTMLInputElement).value,
      password: (document.getElementById('Password') as HTMLInputElement).value,
      nacimiento: (document.getElementById('FechaNacimiento') as HTMLInputElement).value,
      telefono: (document.getElementById('PhoneNumber') as HTMLInputElement).value,
      sinpe: (document.getElementById('SinpeMovil') as HTMLInputElement).value
    };
    console.log(productorNuevo);
    //Se agregar el productor nuevo al json
    this.httpService.post('http://localhost/server/api/Productores/insert', productorNuevo);
    window.location.reload();
  }

}
