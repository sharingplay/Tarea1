import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-afiliation-tier',
  templateUrl: './afiliation-tier.component.html',
  styleUrls: ['./afiliation-tier.component.scss']
})
export class AfiliationTierComponent implements OnInit {
  @Input() productor;
  @Output() openInfo: EventEmitter<string> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
}
