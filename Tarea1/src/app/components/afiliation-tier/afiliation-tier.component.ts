import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-afiliation-tier',
  templateUrl: './afiliation-tier.component.html',
  styleUrls: ['./afiliation-tier.component.scss']
})
export class AfiliationTierComponent implements OnInit {
  @Input() productor;
  constructor() { }

  ngOnInit(): void {
  }
}
