import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse} from '@angular/common/http';



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
   http.get('http://localhost:5000/api/Categorias')
     .subscribe(resp => {
       this.categorias = resp;
     });
   // Cambiar este URL
   http.get('http://localhost:5000/api/Afiliaciones')
     .subscribe((resp: HttpResponse<any>) => {
       this.afiliaciones = resp;
     });
   // Cambiar este
   http.get('http://localhost:5000/api/Top')
      .subscribe((resp: HttpResponse<any>) => {
        this.tops = resp;
        console.log(resp);
      });
   http.get('https://localhost:5001/api/Clientes')
      .subscribe((resp: HttpResponse<any>) => {
        this.clientes = resp;
      });
   http.get('https://localhost:5001/api/Pedidos')
      .subscribe((resp: HttpResponse<any>) => {
        this.pedidos = resp;
      });
   http.get('https://localhost:5001/api/Productores')
      .subscribe((resp: HttpResponse<any>) => {
        this.productores = resp;
      });
   http.get('https://localhost:5001/api/Productos')
      .subscribe((resp: HttpResponse<any>) => {
        this.productos = resp;
      });
 }
}
