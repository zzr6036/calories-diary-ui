import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { NavController } from '@ionic/angular';
import * as moment from 'moment';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
  private _currentDate: any = moment().format();
  mealType: String
  visibleExercise = false;
  visibleBreakfast = false;
  visibleLunch = false;
  visibleDinner = false;

  totalExerciseDuration = 0;
  totalExerciseCalories = 0;
  totalBreakfastItem = 0;
  totalBreakfastCalories = 0;
  totalLunchItem = 0;
  totalLunchCalories = 0;
  totalDinnerItem = 0;
  totalDinnerCalories = 0;

  exerciseItems = [{itemName: "Running", itemDuration: 30, itemCalories: 300},
                   {itemName: "Swimming", itemDuration: 30, itemCalories: 500},
                   {itemName: "Badminton", itemDuration: 20, itemCalories: 200}]

  breakfastItmes = [{itemName: "Milk", itemQty: 1, itemCalories: 100},
                    {itemName: "Banana", itemQty: 1, itemCalories: 50},
                    {itemName: "Bread", itemQty: 2, itemCalories: 100}]

  lunchItmes = [{itemName: "Rice", itemQty: 1, itemCalories: 200},
                {itemName: "Tomato", itemQty: 1, itemCalories: 80},
                {itemName: "Meat", itemQty: 1, itemCalories: 200}]
  
  dinnerItmes = [{itemName: "Noodles", itemQty: 1, itemCalories: 100},
                {itemName: "Meat", itemQty: 1, itemCalories: 200},
                {itemName: "Apple", itemQty: 1, itemCalories: 50}]

  constructor(
    private router: Router, 
    public navCtrl: NavController,
    private route: ActivatedRoute) { }

  ngOnInit() {
    for(var i=0; i<this.exerciseItems.length; i++){
      this.totalExerciseDuration += this.exerciseItems[i].itemDuration
      this.totalExerciseCalories += this.exerciseItems[i].itemCalories
    }
    for(var i=0; i<this.breakfastItmes.length; i++){
      this.totalBreakfastItem += this.breakfastItmes[i].itemQty
      this.totalBreakfastCalories += this.breakfastItmes[i].itemCalories
    }
    for(var i=0; i<this.lunchItmes.length; i++){
      this.totalLunchItem += this.lunchItmes[i].itemQty
      this.totalLunchCalories += this.lunchItmes[i].itemCalories
    }
    for(var i=0; i<this.dinnerItmes.length; i++){
      this.totalDinnerItem += this.dinnerItmes[i].itemQty
      this.totalDinnerCalories += this.dinnerItmes[i].itemCalories
    }
  }

  goToLastDay(){
    this.currentDate = moment(this.currentDate).subtract(1, 'days').format()
  }
  goToNextDay(){
    this.currentDate = moment(this.currentDate).add(1, 'days').format()
  }
  addMeal(mealType: String) {
    this.router.navigate(['/foodrecord', mealType])
  }
  exerciseSelection(){
    this.router.navigate(['/exercise/'])
  }
  changeDate(value) {
    console.log(this.currentDate);
  }

  get currentDate() {
    return this._currentDate;
  }

  set currentDate(value: any) {
    if (typeof (value) !== 'string') {
      const { year, month, day } = value,
        date = new Date(year.value, month.value - 1, day.value);
      this._currentDate = moment(date).format();
    } else {
      this._currentDate = value;
    }
  }
  toggleExercise(){
    this.visibleExercise = !this.visibleExercise;
  }
  toggleBreakfast(){
    this.visibleBreakfast = !this.visibleBreakfast;
  }
  toggleLunch(){
    this.visibleLunch = !this.visibleLunch;
  }
  toggleDinner(){
    this.visibleDinner = !this.visibleDinner;
  }
  back(){

  }
}
