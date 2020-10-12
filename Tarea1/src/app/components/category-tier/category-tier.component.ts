import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';


// @ts-ignore
// @ts-ignore
// @ts-ignore
@Component({
  selector: 'app-category-tier',
  templateUrl: './category-tier.component.html',
  styleUrls: ['./category-tier.component.scss']
})
export class CategoryTierComponent implements OnInit {
  constructor() { }

  @Input() id;
  @Input() name;
  @Output() openModalWithComponent: EventEmitter<string> = new EventEmitter();

  ngOnInit(): void {
  }

  openModal(): void{
    this.openModalWithComponent.emit();
  }
}
