import { Component, OnInit } from '@angular/core';
import { AmChartsService,AmChart } from "@amcharts/amcharts3-angular";
import { LoginService } from '../../login/shared/login.service';

@Component({
  selector: 'app-logarithim-chart',
  templateUrl: './logarithim-chart.component.html',
  styleUrls: ['./logarithim-chart.component.css']
})
export class LogarithimChartComponent implements OnInit {
  private chart: AmChart;
  constructor(private loginservice:LoginService, private  AmCharts:AmChartsService) { }

  ngOnInit() {
   
    //console.log(JSON.parse(JSON.stringify(this.loginservice.dashboardTaskList)));
  }
  ngAfterViewInit()
  {
    this.loginservice.getDashboardTaskByRole(localStorage.getItem("loggedUserRole"));
     this.chart = this.AmCharts.makeChart( "chartdiv5", {
        "type": "serial",
        "theme": "light",
        "dataProvider":JSON.parse(JSON.stringify(this.loginservice.dashboardTaskList)),
        "valueAxes": [ {
          "gridColor": "#FFFFFF",
          "gridAlpha": 0.2,
          "dashLength": 0
        } ],
        "gridAboveGraphs": true,
        "startDuration": 1,
        "graphs": [ {
          "balloonText": "[[category]]: <b>[[value]]</b>",
          "fillAlphas": 0.8,
          "lineAlpha": 0.2,
          "type": "column",
          "valueField": "HoursSpend" 
        } ],
        "chartCursor": {
          "categoryBalloonEnabled": false,
          "cursorAlpha": 0,
          "zoomable": false
        },
        "categoryField": "TaskName",
        "categoryAxis": {
          "gridPosition": "start",
          "gridAlpha": 0,
          "tickPosition": "start",
          "tickLength": 20
        },
        "export": {
          "enabled": true
        }
      
      } );
  }

//   ngOnDestroy() {
//     if (this.chart) 
//       this.AmCharts.destroyChart(this.chart);
//     }

}
