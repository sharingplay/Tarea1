import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-centered-button',
  templateUrl: './centered-button.component.html',
  styleUrls: ['./centered-button.component.scss']
})
export class CenteredButtonComponent implements OnInit {

  constructor() { }
  // tslint:disable-next-line:no-output-on-prefix
  @Output() onClick: EventEmitter<string> = new EventEmitter();
  @Input() label;
  ngOnInit(): void {
  }

}
