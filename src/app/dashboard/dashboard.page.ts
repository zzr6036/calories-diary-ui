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
  visible = false;
  
  constructor(
    private router: Router, 
    public navCtrl: NavController,
    private route: ActivatedRoute) { }

  ngOnInit() {
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

  toggleExercise() {
    this.visible = !this.visible;
   }
}
