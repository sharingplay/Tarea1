import {Component, Inject, OnInit} from '@angular/core';
import {MessengerService} from "../../../MessengerService";
import {HttpClientService} from '../../../services/http-client-service';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-gestion-productos',
  templateUrl: './gestion-productos.component.html',
  styleUrls: ['./gestion-productos.component.scss']
})
export class GestionProductosComponent implements OnInit {
  cliente: any;

  constructor(private ruta: ActivatedRoute, public httpService: HttpClientService,
              @Inject(MAT_DIALOG_DATA) public message: HttpClientService['productos']) {

  }
  actualizarDatos(): void {
    this.message.nombre = (document.getElementById('producto') as HTMLInputElement).value;
    this.message.categoria = (document.getElementById('categoria') as HTMLInputElement).value;
    this.message.modo = (document.getElementById('Mododeventa') as HTMLInputElement).value;
    this.message.disponibilidad = (document.getElementById('DisponibilidadProducto') as HTMLInputElement).value;
    this.message.precio = (document.getElementById('precio') as HTMLInputElement).value;
    console.log(this.message);
    this.httpService.post('https://localhost:5001/api/Productos/modify', this.message);
  }


  ngOnInit(): void {
  }

}
