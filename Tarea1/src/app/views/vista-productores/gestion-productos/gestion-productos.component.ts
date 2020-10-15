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
  productor: any;
  message: any;
  modify: boolean;
  constructor(private ruta: ActivatedRoute, public httpService: HttpClientService,
              @Inject(MAT_DIALOG_DATA) public recibido: HttpClientService['productos']) {
    this.message = recibido[0];
    this.modify = recibido[1];
    this.productor = recibido[2];
  }
  actualizarDatos(): void {
    if(this.modify){
      this.message.nombre = (document.getElementById('producto') as HTMLInputElement).value;
      this.message.categoria = (document.getElementById('categoria') as HTMLInputElement).value;
      this.message.modo = (document.getElementById('Mododeventa') as HTMLInputElement).value;
      this.message.disponibilidad = (document.getElementById('DisponibilidadProducto') as HTMLInputElement).value;
      this.message.precio = (document.getElementById('precio') as HTMLInputElement).value;
      this.message.foto = (document.getElementById('foto') as HTMLInputElement).value;
      console.log(this.message);
      this.httpService.post('https://localhost:5001/api/Productos/modify', this.message);
    }
    else{
      this.httpService.post('https://localhost:5001/api/Productos/insert', {
        Nombre: (document.getElementById('producto') as HTMLInputElement).value,
        Categoria: (document.getElementById('categoria') as HTMLInputElement).value,
        Foto: (document.getElementById('foto') as HTMLInputElement).value,
        Precio: (document.getElementById('precio') as HTMLInputElement).value,
        Modo: (document.getElementById('Mododeventa') as HTMLInputElement).value,
        Disponibilidad: (document.getElementById('DisponibilidadProducto') as HTMLInputElement).value,
        Productor: this.productor.cedula
      });
    }

  }


  ngOnInit(): void {
  }

}
