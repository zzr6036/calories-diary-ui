import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-foodrecord',
  templateUrl: './foodrecord.page.html',
  styleUrls: ['./foodrecord.page.scss'],
})
export class FoodrecordPage implements OnInit {
  myInput: string;
  qtys: [1,2,3,4,5,6,7,8,9,10]
  qtySelect: number;

  constructor() { }

  ngOnInit() {
  }

}
