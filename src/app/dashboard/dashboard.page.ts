import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { NavController, Item, Events } from '@ionic/angular';
import * as moment from 'moment';
import { HttpClient } from '@angular/common/http';
import { Globals } from '../global';
import _ from 'underscore';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
  private _currentDate: any = moment().format();
  mealType: String
  visibleExercise = true;
  visibleBreakfast = true;
  visibleLunch = true;
  visibleDinner = true;

  availableCalroies = 1800;
  totalExerciseDuration = 0;
  totalExerciseCalories = 0;
  totalBreakfastItem = 0;
  totalBreakfastCalories = 0;
  totalLunchItem = 0;
  totalLunchCalories = 0;
  totalDinnerItem = 0;
  totalDinnerCalories = 0;
  totalFoodCalories = 0;
  totalCaloriesLeft = 0;
  exerciseItems = [];
  breakfastItems = [];
  lunchItems = [];
  dinnerItems = [];

  constructor(
    private router: Router, 
    public navCtrl: NavController,
    private route: ActivatedRoute,
    private http: HttpClient,
    private global: Globals,
    public eventCtrl: Events
  ) { }

  ngOnInit() {
    this.loadInfo(new Date());
  }

  ionViewWillEnter() {
    //console.log('entering');
    this.loadInfo(new Date());
    // Avoid ionic double loading bug
    this.eventCtrl.unsubscribe("Refresh:Dashboard");
    this.eventCtrl.subscribe("Refresh:Dashboard", (data)=>{
      console.log(data)
      this.loadInfo(new Date());
    });
  }
  ionViewDidEnter() {
    //console.log('entered');
  }
  ionViewDidLeave(){
    this.eventCtrl.unsubscribe("Refresh:Dashboard");
  }
  loadInfo(date) {
    console.log("load info");
    const q = {
      UserId: 34,
      StartDate: [date.getFullYear(), date.getMonth() + 1, date.getDate()].join('-') + ' 00:00:00',
      EndDate: [date.getFullYear(), date.getMonth() + 1, date.getDate()].join('-') + ' 23:59:59'
    };
    this.http.post(this.global.resourceUrl + '/api/exerciserecord/read', q).subscribe((resp: any) => {
      this.exerciseItems = resp.map(x => {
        return {
          itemName: x.ExerciseName,
          itemDuration: x.Amount,
          itemCalories: x.UnitCaloriesBurnt * x.Amount,
        }
      });
      this.calculateSummary();
    });

    this.http.post(this.global.resourceUrl + '/api/foodrecord/read', q).subscribe(resp => {
      const meals = _.groupBy(resp, 'MealType')
      const mealMappings = x => {
        return {
          itemName: x.FoodName,
          itemQty: x.Quantity,
          itemCalories: x.UnitCalories * x.Quantity,
        }
      }
      this.breakfastItems = meals.breakfast ? meals.breakfast.map(mealMappings) : [];
      this.lunchItems = meals.lunch ? meals.lunch.map(mealMappings) : [];
      this.dinnerItems = meals.dinner ? meals.dinner.map(mealMappings) : [];
      this.calculateSummary();
    });
  }

  calculateSummary() {
    this.totalExerciseDuration = 0;
    this.totalExerciseCalories = 0;
    this.totalBreakfastItem = 0;
    this.totalBreakfastCalories = 0;
    this.totalLunchItem = 0;
    this.totalLunchCalories = 0;
    this.totalDinnerItem = 0;
    this.totalDinnerCalories = 0;
    this.totalFoodCalories = 0;
    this.totalCaloriesLeft = 0;

    for(var i=0; i<this.exerciseItems.length; i++){
      this.totalExerciseDuration += this.exerciseItems[i].itemDuration
      this.totalExerciseCalories += this.exerciseItems[i].itemCalories
    }
    for(var i=0; i<this.breakfastItems.length; i++){
      this.totalBreakfastItem += this.breakfastItems[i].itemQty
      this.totalBreakfastCalories += this.breakfastItems[i].itemCalories
    }
    for(var i=0; i<this.lunchItems.length; i++){
      this.totalLunchItem += this.lunchItems[i].itemQty
      this.totalLunchCalories += this.lunchItems[i].itemCalories
    }
    for(var i=0; i<this.dinnerItems.length; i++){
      this.totalDinnerItem += this.dinnerItems[i].itemQty
      this.totalDinnerCalories += this.dinnerItems[i].itemCalories
    }
    this.totalFoodCalories = this.totalBreakfastCalories + this.totalLunchCalories + this.totalDinnerCalories;
    this.totalCaloriesLeft = this.availableCalroies - this.totalFoodCalories + this.totalExerciseCalories;
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
    this.loadInfo(new Date(this.currentDate));
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
