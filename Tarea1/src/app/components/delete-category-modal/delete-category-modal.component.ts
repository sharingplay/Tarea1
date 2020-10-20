import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {BsModalRef} from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-delete-category-modal',
  templateUrl: './delete-category-modal.component.html',
  styleUrls: ['./delete-category-modal.component.scss']
})
export class DeleteCategoryModalComponent implements OnInit {

  title: string;
  closeBtnName: string;
  list: any[] = [];
  @Output() whoDelete: EventEmitter<string> = new EventEmitter();
  hideModal = false;
  constructor(public bsModalRef: BsModalRef) { }

  ngOnInit(): void {
  }
  // tslint:disable-next-line:typedef
  close() {
    this.hideModal = true;
  }

}
