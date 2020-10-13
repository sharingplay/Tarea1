import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent implements OnInit {
  private username: string;
  private password: string;

  constructor() { }
  login(): void{

    this.username = (document.getElementById('username') as HTMLInputElement).value;
    this.password = (document.getElementById('password') as HTMLInputElement).value;
    console.log(this.username);
    console.log(this.password);

  }

  ngOnInit(): void {
  }

}
