import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse} from '@angular/common/http';
import {catchError} from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class HttpClientService {
  // `http://localhost:5000/api/`
  // `https://localhost:5001/api/`
  static URL = `https://localhost:5001/api/`;
  categorias: any = {};
  afiliaciones: any = {};
  tops: any = {};
  clientes: any = {};
  pedidos: any = {};
  productores: any = {};
  productos: any = {};

  constructor(private http: HttpClient) {
   console.log('Service Running');
   http.get(HttpClientService.URL + 'Categorias')
     .subscribe(resp => {
       this.categorias = resp;
     });
   http.get(HttpClientService.URL + 'Pedidos')
      .subscribe(resp => {
        this.pedidos = resp;
      });
   // Cambiar este URL
   http.get(HttpClientService.URL + 'Afiliaciones')
     .subscribe((resp: HttpResponse<any>) => {
       this.afiliaciones = resp;
     });
   // Cambiar este
   http.get(HttpClientService.URL + 'Top')
      .subscribe((resp: HttpResponse<any>) => {
        this.tops = resp;
      });
   http.get(HttpClientService.URL + 'Clientes')
      .subscribe((resp: HttpResponse<any>) => {
        this.clientes = resp;
      });
   http.get(HttpClientService.URL + 'Pedidos')
      .subscribe((resp: HttpResponse<any>) => {
        this.pedidos = resp;
      });
   http.get(HttpClientService.URL + 'Productores')
      .subscribe((resp: HttpResponse<any>) => {
        this.productores = resp;
      });
   http.get(HttpClientService.URL + 'Productos')
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
