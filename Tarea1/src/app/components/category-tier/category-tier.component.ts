import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {HttpClientService} from '../../services/http-client-service';


// @ts-ignore
// @ts-ignore
// @ts-ignore
@Component({
  selector: 'app-category-tier',
  templateUrl: './category-tier.component.html',
  styleUrls: ['./category-tier.component.scss']
})
export class CategoryTierComponent implements OnInit {
  constructor(public  hhtpService: HttpClientService) { }

  @Input() id;
  @Input() name;
  @Output() openModalWithComponent: EventEmitter<string> = new EventEmitter();

  ngOnInit(): void {
  }

  openModal(): void{
    // @ts-ignore
    this.openModalWithComponent.emit(this.deleteCategory);
  }
  deleteCategory(): void{
    this.hhtpService.post('http://localhost:5000/api/Categorias/delete' ,
      {
        Codigo: this.id,
      });
  }
}
