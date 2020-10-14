import { Component, OnInit } from '@angular/core';
import {MessengerService} from "../../../MessengerService";

@Component({
  selector: 'app-gestion-productos',
  templateUrl: './gestion-productos.component.html',
  styleUrls: ['./gestion-productos.component.scss']
})
export class GestionProductosComponent implements OnInit {
  cliente: any;

  constructor(private messengerService: MessengerService) {
    console.log("EN ACTUALIZAR")
    this.messengerService.message.subscribe(value => {
      console.log(value);
      this.cliente = value;
    });
  }

  ngOnInit(): void {
  }

}
