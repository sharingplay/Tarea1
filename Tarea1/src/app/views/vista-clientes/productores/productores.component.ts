import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-productores',
  templateUrl: './productores.component.html',
  styleUrls: ['./productores.component.scss']
})
export class ProductoresComponent implements OnInit {
  productos: string[][] = [['pequeno', 'le ofrecemos todo tipo de verdura'], ['ticos', 'las mejores frutas'], ['el amigo', 'lo mejor hasta su casa'], ['la pulpe', 'lo mejor en verduras']];
  constructor() { }

  ngOnInit(): void {
  }

}
