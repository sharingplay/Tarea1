import {Component, Inject, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {HttpResponse} from '@angular/common/http';
import {HttpClientService} from '../../../services/http-client-service';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import Global = WebAssembly.Global;

@Component({
  selector: 'app-actualizar-productores',
  templateUrl: './actualizar-productores.component.html',
  styleUrls: ['./actualizar-productores.component.scss']
})
export class ActualizarProductoresComponent implements OnInit {
  constructor(private ruta: ActivatedRoute, public httpService: HttpClientService,
              @Inject(MAT_DIALOG_DATA) public message: HttpClientService['productos']) {

  }

  ngOnInit(): void {

  }

  actualizarDatos(): void {
    this.message.nombre = (document.getElementById('FirstName') as HTMLInputElement).value;
    this.message.apellidos = (document.getElementById('LastName') as HTMLInputElement).value;
    this.message.provincia = (document.getElementById('Provincia') as HTMLInputElement).value;
    this.message.foto = (document.getElementById('Foto') as HTMLInputElement).value;
    this.message.canton = (document.getElementById('Canton') as HTMLInputElement).value;
    this.message.distrito = (document.getElementById('Distrito') as HTMLInputElement).value;
    this.message.password = (document.getElementById('Password') as HTMLInputElement).value;
    this.message.telefono = (document.getElementById('PhoneNumber') as HTMLInputElement).value;
    this.message.sinpe = (document.getElementById('SinpeMovil') as HTMLInputElement).value;
    console.log("ENVIAR A ACTUALIZAR");
    console.log(this.message);
    this.httpService.post('http://localhost/server/api/Productores/modify', this.message);
  }
}
