import { Component } from '@angular/core';
import { HttpClientService } from './services/http-client-service';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Tarea1';
  constructor(public categorias: HttpClientService) {
  }
}
