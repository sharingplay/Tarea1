import { Injectable } from "@angular/core";
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Observable} from 'rxjs';

@Injectable()
export class Globals {
  clienteActual: string;
}
