import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
  public currentDate = moment().format()

  constructor() { }

  ngOnInit() {
  }

  goToLastDay(){
    this.currentDate = moment().subtract(1, 'days').format()
  }
  goToNextDay(){
    this.currentDate = moment().add(1, 'days').format()
  }
  exerciseSelection(){

  }
  breakfastSelection(){
    
  }
  lunchSelection(){
    
  }
  dinnerSelection(){
    
  }

}
