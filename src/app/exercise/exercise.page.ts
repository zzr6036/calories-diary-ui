import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-exercise',
  templateUrl: './exercise.page.html',
  styleUrls: ['./exercise.page.scss'],
})
export class ExercisePage implements OnInit {

  rootPage: any = 'TablePage'
  myInput: string;

  //Food record items
 //itemQtys = 0;
  exertiseItems = [{itemSelected: false, itemName: "Swimming", itemDuration: 0, itemCalories: 300},
                   {itemSelected: false, itemName: "Running", itemDuration: 0, itemCalories: 280},
                   {itemSelected: false, itemName: "Walking", itemDuration: 0, itemCalories: 600},
                   {itemSelected: false, itemName: "Batminton", itemDuration: 0, itemCalories: 1000},
                   {itemSelected: false, itemName: "Tennis", itemDuration: 0, itemCalories: 400},]
  
  constructor(
    public navCtrl: NavController,
  ) { }

  ngOnInit() {
  }

  reduceQty(i){
    this.exertiseItems[i].itemDuration -= 10;
    console.log(this.exertiseItems)
    //console.log(this.itemQtys)
  }

  addQty(i){
    this.exertiseItems[i].itemDuration += 10;
    //console.log(this.itemQtys)
  }

  back(){
    this.navCtrl.navigateForward('/tab/tabs/(dashboard:dashboard)');
  }

}
