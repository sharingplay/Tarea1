import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse} from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class HttpClientService {
 categorias: any = {};
 afiliaciones: any = {};
 tops: any = {};
 cargada = false;
 options = {
    responseType: 'text' as const,
  };
  constructor(private http: HttpClient) {
   console.log('Service Running');
   http.get('../../assets/data/categorias.json')
     .subscribe(resp => {
       this.categorias = resp;
     });
   http.get('../../assets/data/afiliaciones.json')
     .subscribe((resp: HttpResponse<any>) => {
       this.afiliaciones = resp;
     });
   http.get('../../assets/data/topTen.json')
      .subscribe((resp: HttpResponse<any>) => {
        this.tops = resp;
      });
   this.cargada = true;
 }
}
