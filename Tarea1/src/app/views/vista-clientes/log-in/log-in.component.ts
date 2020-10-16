import { Component, OnInit } from '@angular/core';
import {HttpClientService} from '../../../services/http-client-service';
import {Router} from '@angular/router';
import {HttpResponse, HttpClient} from '@angular/common/http';
import {Subscription} from 'rxjs';
import {MessengerService} from "../../../MessengerService";

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent implements OnInit {
  private messageSubscription: Subscription;
  private username: string;
  private password: string;
  public usuario: any;

  constructor(public httpService: HttpClientService, private router: Router, private server: HttpClient, private messengerService: MessengerService) { }
  async login(): Promise<void> {

    this.username = (document.getElementById('username') as HTMLInputElement).value;
    this.password = (document.getElementById('password')as HTMLInputElement).value;
    console.log(this.username);
    console.log(this.password);
    // tslint:disable-next-line:prefer-const
    let promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        this.server.post('https://localhost:5001/api/Clientes/getlogin',
          {Usuario: this.username, Password: this.password}, {
            headers: {
              'Content-Type': 'application/json; charset=UTF-8'
            }
          }).subscribe((resp: HttpResponse<any>) => {console.log(resp); this.usuario = resp;
                                                     if (this.usuario == null){
                                                       this.server.post('https://localhost:5001/api/Productores/getlogin',
                                                         {Usuario: this.username, Password: this.password}, {
                                                           headers: {
                                                             'Content-Type': 'application/json; charset=UTF-8'
                                                           }
                                                         }).subscribe((ans: HttpResponse<any>) => {
                                                         this.usuario = ans;
                                                         console.log(this.usuario);
                                                         if (this.usuario == null) {
                                                           alert('Usuario Invalido');
                                                         } else {
                                                           // this.messengerService.setMessage(this.usuario.cedula);
                                                           this.messageSubscription = this.messengerService.message.subscribe(m => {
                                                             this.messengerService.setMessage(this.usuario);
                                                           });
                                                           this.router.navigate(['/VistaProductores']);
                                                         }
                                                       });
      } else{
       // this.messengerService.setMessage(this.usuario.cedula);
       this.messageSubscription = this.messengerService.message.subscribe(m => {
         this.messengerService.setMessage(this.usuario);
       });
        this.router.navigate(['/','Productores']);
      } }
    );
        resolve();
      }, 1000);
    });
    console.log(promise);
  }

  ngOnInit(): void {
  }

}
