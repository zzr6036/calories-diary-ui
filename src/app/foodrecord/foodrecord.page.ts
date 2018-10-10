import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-foodrecord',
  templateUrl: './foodrecord.page.html',
  styleUrls: ['./foodrecord.page.scss'],
})
export class FoodrecordPage implements OnInit {
  rootPage: any = 'TablePage'
  myInput: string;

  //Food record items
 //itemQtys = 0;
  foodRecordItems = [{itemSelected: false, itemName: "Egg", itemQty: 0, itemCalories: 300},
                     {itemSelected: false, itemName: "Apple", itemQty: 0, itemCalories: 280},
                     {itemSelected: false, itemName: "Meat", itemQty: 0, itemCalories: 600},
                     {itemSelected: false, itemName: "Fries", itemQty: 0, itemCalories: 1000},
                     {itemSelected: false, itemName: "Rice", itemQty: 0, itemCalories: 400},]
  
  constructor(
    public navCtrl: NavController,
  ) { }

  ngOnInit() {
  }

  reduceQty(i){
    this.foodRecordItems[i].itemQty -= 1;
    console.log(this.foodRecordItems)
    //console.log(this.itemQtys)
  }

  addQty(i){
    this.foodRecordItems[i].itemQty += 1;
    //console.log(this.itemQtys)
  }
  back(){
    this.navCtrl.navigateForward('/tab/tabs/(dashboard:dashboard)');
  }

}
