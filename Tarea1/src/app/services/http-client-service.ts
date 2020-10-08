import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {
 categorias: any = {} ;
 cargada = false;
 options = {
    responseType: 'text' as const,
  };
  constructor(private http: HttpClient) {
   console.log('Service Running');
   http.get('../../assets/data/categorias.json')
     .subscribe(resp => {
       this.categorias = resp;
       this.cargada = true;
     });
 }
}
