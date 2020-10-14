import {Component, Inject, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {HttpResponse} from '@angular/common/http';
import {HttpClientService} from "../../../services/http-client-service";
import {MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-actualizar-productores',
  templateUrl: './actualizar-productores.component.html',
  styleUrls: ['./actualizar-productores.component.scss']
})
export class ActualizarProductoresComponent implements OnInit {
  constructor(private ruta: ActivatedRoute, public httpService: HttpClientService,
              @Inject(MAT_DIALOG_DATA) public message: HttpClientService['productos']) {

  }

  ngOnInit(): void {

  }

}
