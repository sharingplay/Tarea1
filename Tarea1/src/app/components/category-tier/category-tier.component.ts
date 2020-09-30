import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-category-tier',
  templateUrl: './category-tier.component.html',
  styleUrls: ['./category-tier.component.scss']
})
export class CategoryTierComponent implements OnInit {

  @Input() id;
  @Input() name;
  constructor() { }

  ngOnInit(): void {
  }

}
