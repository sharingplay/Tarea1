import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse} from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class HttpClientService {
 categorias: any = {};
 afiliaciones: any = {};
 cargada = false;
 options = {
    responseType: 'text' as const,
  };
  constructor(private http: HttpClient) {
   console.log('Service Running');
   http.get('../../assets/data/categorias.json')
     .subscribe(resp => {
       this.categorias = resp;
       console.log(resp);
     });
   http.get('../../assets/data/afiliaciones.json')
     .subscribe((resp: HttpResponse<any>) => {
       this.afiliaciones = resp;
       console.log(this.afiliaciones);
     });
   this.cargada = true;
 }
}
