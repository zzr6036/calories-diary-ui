import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Storage } from '@ionic/storage';
import Chart from 'chart.js';
import { Globals } from './../global';

@Component({
  selector: 'app-report',
  templateUrl: './report.page.html',
  styleUrls: ['./report.page.scss'],
})
export class ReportPage implements OnInit, AfterViewInit {
  @ViewChild('lineCanvas') lineCanvas;
  public lineChart: any;
  public personalInfo: any;
  
  constructor(
	  	private http: HttpClient,
		private globals: Globals,
		private storage: Storage) { }

  ngOnInit() {
	
  }

  ngAfterViewInit() {
    this.lineChart = this.renderChart();
  }
  
  renderChart() {
    const today = new Date();
    const dateRanges = [];
    for(let i = 0; i < 7; i++) {
      dateRanges.push(new Date(today.getFullYear(), today.getMonth(), today.getDate() - i));
    }
    
    const data = [10, 15, 20];
    const options = {};
    const config = {
      type: 'line',
      data: {
        labels: dateRanges.reverse().map(d => [d.getMonth() + 1, '-', d.getDate()].join('')),
        datasets: [{ 
            data: [1823, 1923, 2019, 1729, 1928, 2001, 1993],
            label: "Calories",
            borderColor: "#3e95cd",
            fill: false
          }
        ]
      },
      options: {
        title: {
          display: true,
          text: 'Weekly Calories Intakes'
        }
      }
    }
    return new Chart(this.lineCanvas.nativeElement, config);
  }
}
