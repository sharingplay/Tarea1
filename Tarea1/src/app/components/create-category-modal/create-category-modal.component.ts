import { Component, OnInit } from '@angular/core';
import {BsModalRef} from 'ngx-bootstrap/modal';
import {HttpClientService} from '../../services/http-client-service';

@Component({
  selector: 'app-create-category-modal',
  templateUrl: './create-category-modal.component.html',
  styleUrls: ['./create-category-modal.component.scss']
})
export class CreateCategoryModalComponent implements OnInit {

  constructor(public bsModalRef: BsModalRef, private httpClient: HttpClientService) { }

  ngOnInit(): void {
  }
  sendCategory(): void{
    // tslint:disable-next-line:prefer-const
    console.log('SDaasdasdasd');
    const nuevaCategoria = {
      Codigo: (document.getElementById('id') as HTMLInputElement).value,
      Nombre: (document.getElementById('name') as HTMLInputElement).value,
    };
    this.httpClient.post('http://localhost:5000/api/Categorias/insert', nuevaCategoria);
  }
}
