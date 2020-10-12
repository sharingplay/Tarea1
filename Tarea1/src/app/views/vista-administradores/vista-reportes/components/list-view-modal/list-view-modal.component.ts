import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-view-modal',
  templateUrl: './list-view-modal.component.html',
  styleUrls: ['./list-view-modal.component.scss']
})
export class ListViewModalComponent implements OnInit {
  infoList: any;
  title: any;
  constructor() { }

  ngOnInit(): void {
  }

}
