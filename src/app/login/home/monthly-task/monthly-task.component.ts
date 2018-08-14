import { Component, OnInit } from '@angular/core';
import { AmChartsService,AmChart } from "@amcharts/amcharts3-angular";
@Component({
  selector: 'app-monthly-task',
  templateUrl: './monthly-task.component.html',
  styleUrls: ['./monthly-task.component.css']
})
export class MonthlyTaskComponent implements OnInit {
  private chart: AmChart;
  constructor(private  AmCharts:AmChartsService) { }
  ngAfterViewInit() {
    this.chart = this.AmCharts.makeChart("chartdiv", {
      "type": "serial",
         "theme": "light",
      "categoryField": "month",
      "rotate": true,
      "startDuration": 1,
      "categoryAxis": {
        "gridPosition": "start",
        "position": "left"
      },
      "trendLines": [],
      "graphs": [
        {
          "balloonText": "coding:[[value]]",
          "fillAlphas": 0.8,
          "id": "AmGraph-1",
          "lineAlpha": 0.2,
          "title": "Hours Spent",
          "type": "column",
          "valueField": "coding"
        },
        {
          "balloonText": "codeReview:[[value]]",
          "fillAlphas": 0.8,
          "id": "AmGraph-2",
          "lineAlpha": 0.2,
          "title": "codeReview",
          "type": "column",
          "valueField": "codeReview"
        },
        {
          "balloonText": "UnitTesting:[[value]]",
          "fillAlphas": 0.8,
          "id": "AmGraph-2",
          "lineAlpha": 0.2,
          "title": "UnitTesting",
          "type": "column",
          "valueField": "UnitTesting"
        },
        {
          "balloonText": "documentation:[[value]]",
          "fillAlphas": 0.8,
          "id": "AmGraph-2",
          "lineAlpha": 0.2,
          "title": "Documentation",
          "type": "column",
          "valueField": "documentation"
        }
      ],
      "guides": [],
      "valueAxes": [
        {
          "id": "ValueAxis-1",
          "position": "top",
          "axisAlpha": 0
        }
      ],
      "allLabels": [],
      "balloon": {},
      "titles": [],
      "dataProvider": [
        {
          "month": 'May',
          "coding": 80.5,
          "codeReview": 20,
          "UnitTesting":25.5,
          "documentation":10,
        },
        {
          "month": 'April',
          "coding": 90.5,
          "codeReview": 20,
          "UnitTesting":25.5,
          "documentation":10,
        },
        {
          "month": 'May',
          "coding": 70.5,
          "codeReview": 20,
          "UnitTesting":30.5,
          "documentation":15,
        },
        {
          "month": 'June',
          "coding": 100.5,
          "codeReview": 20,
          "UnitTesting":25.5,
          "documentation":10,
        },
        {
          "month": 'July',
          "coding": 95.5,
          "codeReview": 25,
          "UnitTesting":20.5,
          "documentation":20,
        }
      ],
        "export": {
          "enabled": true
         }
    
    });
  }
  ngOnInit() {
  }
  ngOnDestroy() {
    if (this.chart) 
      this.AmCharts.destroyChart(this.chart);
    }

}
