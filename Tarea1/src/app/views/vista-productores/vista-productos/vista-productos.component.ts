import { Component, OnInit } from '@angular/core';
import {HttpClientService} from '../../../services/http-client-service';
import {BsModalRef, BsModalService} from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-vista-productos',
  templateUrl: './vista-productos.component.html',
  styleUrls: ['./vista-productos.component.scss']
})
export class VistaProductosComponent implements OnInit {

  constructor(public httpService: HttpClientService, public modalService: BsModalService) {
  }
  bsModalRef: BsModalRef;
  // Funcion para eliminar productos del Json de productores.
  delete(producto): void{
    console.log(producto);
    this.httpService.post('https://localhost:5001/api/Productos/delete', producto);
    window.location.reload();
  }
  ngOnInit(): void {
  }

}
