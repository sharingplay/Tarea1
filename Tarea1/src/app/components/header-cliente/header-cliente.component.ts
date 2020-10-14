import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {CarritoComponent} from '../../shopping-cart/carrito/carrito.component';
import {MessengerService} from '../../MessengerService';

@Component({
  selector: 'app-header-cliente',
  templateUrl: './header-cliente.component.html',
  styleUrls: ['./header-cliente.component.scss']
})
export class HeaderClienteComponent implements OnInit {
  cliente: any;
  constructor(public dialog: MatDialog, private messengerService: MessengerService) {
    this.messengerService.message.subscribe(value => {this.cliente = value});
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(CarritoComponent, {
      width: '70%',
      height: '70%',
      data: this.cliente.cedula,
      position: {
        top: '',
        bottom: '',
        left: '',
        right: ''
      }
    });
    dialogRef.afterClosed().subscribe(res => {console.log(res);})
  }

  ngOnInit(): void {
  }

}
