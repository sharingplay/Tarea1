import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-centered-button',
  templateUrl: './centered-button.component.html',
  styleUrls: ['./centered-button.component.scss']
})
export class CenteredButtonComponent implements OnInit {

  constructor() { }

  @Input() label;
  ngOnInit(): void {
  }

}
