import {Component, Inject, OnInit} from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {HttpClientService} from '../../../../services/http-client-service';
import {HttpClient, HttpResponse} from '@angular/common/http';

@Component({
  selector: 'app-pedido-clientes',
  templateUrl: './pedido-clientes.component.html',
  styleUrls: ['./pedido-clientes.component.scss']
})
export class PedidoClientesComponent implements OnInit {
  productor: any;
  constructor(public dialogRef: MatDialogRef<PedidoClientesComponent>,
              @Inject(MAT_DIALOG_DATA) public message: HttpClientService['pedidos'], public httpService: HttpClientService, public http: HttpClient) {
    console.log(message);
    this.http.post('http://localhost/server/api/Productores/getProductId', { Cedula: this.message.productor}).subscribe(
      (resp: HttpResponse<any>) => { this.productor = resp; console.log(resp); });
  }
  productos = this.message.listado;
  total = 0;
  ngOnInit(): void {
    for (let prod of this.message.listado){
      this.total += Number(prod.cantidad) * Number(prod.precio);
    }
  }

  feedBack(): void{
    const feedback = (document.getElementById("feedback") as HTMLInputElement).value;
    this.message.feedback = feedback;
    this.httpService.post('http://localhost/server/api/Pedidos/modify', this.message);
  }

}
