import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {HttpResponse} from '@angular/common/http';
import {HttpClientService} from "../../../services/http-client-service";

@Component({
  selector: 'app-actualizar-productores',
  templateUrl: './actualizar-productores.component.html',
  styleUrls: ['./actualizar-productores.component.scss']
})
export class ActualizarProductoresComponent implements OnInit {
  constructor(private ruta: ActivatedRoute, public httpService: HttpClientService) {
    console.log(this.ruta.snapshot.paramMap.get('productor'));
    let cedula = this.ruta.snapshot.paramMap.get('productor');
  }

  /*
  PEDIRLE AYUDA A MARIANA
  PARA OBTENER UN JSON DEL
  PRODUCTOR A PARTIR DE LA
  CEDULA PARA MOSTRARLO EN
  LA PANTALLA DE ACTUALIZACION
   */
  ngOnInit(): void {

  }

}
