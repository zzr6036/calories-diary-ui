import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import Chart from 'chart.js'

@Component({
  selector: 'app-report',
  templateUrl: './report.page.html',
  styleUrls: ['./report.page.scss'],
})
export class ReportPage implements OnInit, AfterViewInit {
  public lineChart: any;

  @ViewChild('lineCanvas') lineCanvas;
  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.lineChart = this.getLineChart();
    }, 350);
  }

  getChart(context, chartType, data, options?) {
    return new Chart(context, {
      data,
      options,
      type: chartType,
    });
  }

  getLineChart() {
    const data = {
      labels: ['Red', 'Blue', 'Yellow'],
      datasets: [
        {
          data: [
            {
            x: 10,
            y: 20
          }, {
            x: 15,
            y: 10
          }, {
            x: 20,
            y: 15
          }
        ]
        }]
    };
    console.log(this.lineCanvas.nativeElement);
    return this.getChart(this.lineCanvas.nativeElement, 'line', data);
  }

}
