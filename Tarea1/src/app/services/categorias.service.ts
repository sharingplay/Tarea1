import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoriasService {
 info: any = {} ;
 cargada = false;
 options = {
    responseType: 'text' as const,
  };
  constructor(private http: HttpClient) {
   console.log('Service Running');
   http.get('../../assets/data/categorias.json')
     .subscribe(resp => {
       this.info = resp;
       this.cargada = true;
       console.log(this.info);
     });
 }
}
