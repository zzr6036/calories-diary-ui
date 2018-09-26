import { Component, OnInit } from '@angular/core';
import { Datetime } from '../../../node_modules/@ionic/angular';
import * as moment from 'moment';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-statistic',
  templateUrl: './statistic.page.html',
  styleUrls: ['./statistic.page.scss'],
})
export class StatisticPage implements OnInit {
  age: Number;
  weight: Number;
  height: Number;
  public recordDate: String = new Date().toISOString()

  constructor(public navCtrl: NavController) { }

  ngOnInit() {
  }

  submit(){
    // personal statistic api to do
    this.navCtrl.navigateForward('/tab/tabs/(dashboard:dashboard)')

  }

}
