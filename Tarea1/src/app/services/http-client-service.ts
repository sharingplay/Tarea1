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
   http.get('https://localhost:5001/api/Categorias')
     .subscribe(resp => {
       this.categorias = resp;
     });
   http.get('https://localhost:5001/api/Pedidos')
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
 post(URL: string, json: any ): void{
    console.log(json);
    this.http.post('https://localhost:5001/api/Pedidos/insert', {
      listado: [
        [
          'Bananos',
          '980',
          '3'
        ],
        [
          'Carne',
          '2750',
          '2'
        ]
      ],
      comprobante: '65857412',
      direccion: 'San Ramon',
      cedula: '205150312',
      nombre: 'Miguel',
      apellido: 'Lagos',
      telefono: '88741520'
    }, {
     headers: {
       'Content-Type': 'application/json; charset=UTF-8'
     }
   });
 }
}
