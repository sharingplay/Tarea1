import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse} from '@angular/common/http';
import {catchError} from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class HttpClientService {
 categorias: any = {};
 afiliaciones: any = {};
 tops: any = {};
 clientes: any = {};
 pedidos: any = {};
 productores: any = {};
 productos: any = {};

  constructor(private http: HttpClient) {
   console.log('Service Running');
   http.get('http://localhost/server/api/Categorias')
     .subscribe(resp => {
       this.categorias = resp;
     });
   http.get('http://localhost/server/api/Pedidos')
      .subscribe(resp => {
        this.pedidos = resp;
      });
   // Cambiar este URL
   http.get('../../assets/data/afiliaciones.json')
     .subscribe((resp: HttpResponse<any>) => {
       this.afiliaciones = resp;
     });
   // Cambiar este
   http.get('../../assets/data/topTen.json')
      .subscribe((resp: HttpResponse<any>) => {
        this.tops = resp;
      });
   http.get('http://localhost/server/api/Clientes')
      .subscribe((resp: HttpResponse<any>) => {
        this.clientes = resp;
      });
   http.get('http://localhost/server/api/Pedidos')
      .subscribe((resp: HttpResponse<any>) => {
        this.pedidos = resp;
      });
   http.get('http://localhost/server/api/Productores')
      .subscribe((resp: HttpResponse<any>) => {
        this.productores = resp;
      });
   http.get('http://localhost/server/api/Productos')
      .subscribe((resp: HttpResponse<any>) => {
        this.productos = resp;
      });
 }
 // @ts-ignore
  async post(URL: string, json: any): HttpResponse<any> {
    console.log(json);
    await this.http.post(URL, json, {
      headers: {
        'Content-Type': 'application/json; charset=UTF-8'
      }
    }).subscribe((resp: HttpResponse<any>) => {console.log(resp); return resp; });
  }
}
