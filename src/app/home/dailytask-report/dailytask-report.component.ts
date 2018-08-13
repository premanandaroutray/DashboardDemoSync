import { Component, OnInit } from '@angular/core';
import { AmChartsService,AmChart } from "@amcharts/amcharts3-angular";
@Component({
  selector: 'app-dailytask-report',
  templateUrl: './dailytask-report.component.html',
  styleUrls: ['./dailytask-report.component.css']
})
export class DailytaskReportComponent implements OnInit {
  private chart: AmChart;
  constructor(private  AmCharts:AmChartsService) { }

  ngOnInit() {
  }
  ngAfterViewInit() {
  this.chart = this.AmCharts.makeChart( "chartdiv1", {
    "type": "pie",
    "theme": "light",
    "dataProvider": [ {
      "Task": "Coding",
      "HoursSpent": 3
    }, {
      "Task": "CodeReview",
      "HoursSpent": 1
    }, {
      "Task": "DB",
      "HoursSpent": 1
    }, {
      "Task": "Documents",
      "HoursSpent": 1
    }, {
      "country": "Australia",
      "litres": 1
    }, {
      "Task": "Miscellaneous",
      "HoursSpent": 1
    }, {
      "Task": "TeamMeeting",
      "HoursSpent": .30
    }, {
      "Task": "CodeReview",
      "HoursSpent": 1
    },  
    {
      "Task": "UnitTesting",
      "HoursSpent": 1
    },
  ],
    "valueField": "HoursSpent",
    "titleField": "Task",
     "balloon":{
     "fixedPosition":true
    },
    "export": {
      "enabled": true
    }
  } );
}
ngOnDestroy() {
  if (this.chart) 
    this.AmCharts.destroyChart(this.chart);
  }
  
}
