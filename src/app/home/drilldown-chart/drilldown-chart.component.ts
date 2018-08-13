import { Component, OnInit } from '@angular/core';
import { AmChartsService,AmChart } from "@amcharts/amcharts3-angular";
@Component({
  selector: 'app-drilldown-chart',
  templateUrl: './drilldown-chart.component.html',
  styleUrls: ['./drilldown-chart.component.css']
})
export class DrilldownChartComponent implements OnInit {
  private chart: AmChart;

  chartData = [{
  "title": "Marketing",
  "value": 23,
  "url":"#",
  "description":"click to drill-down",
  "data": [
    { "title": "Jan", "value": 1, "data": [
      { "title": "AAA", "value": 2 },
      { "title": "BBB", "value": 5 },
      { "title": "CCC", "value": 1 },
    ] },
    { "title": "Feb", "value": 2 },
    { "title": "Mar", "value": 1 },
    { "title": "Apr", "value": 3 },
    { "title": "May", "value": 2 },
    { "title": "Jun", "value": 1 },
    { "title": "Jul", "value": 2 },
    { "title": "Aug", "value": 3 },
    { "title": "Sep", "value": 3 },
    { "title": "Oct", "value": 1 },
    { "title": "Nov", "value": 1 },
    { "title": "Dec", "value": 3 }
  ]
}, {
  "title": "Sales",
  "value": 26,
  "url":"#",
  "description":"click to drill-down",
  "data": [
    { "title": "Jan", "value": 4 },
    { "title": "Feb", "value": 3 },
    { "title": "Mar", "value": 1 },
    { "title": "Apr", "value": 4 },
    { "title": "May", "value": 2 },
    { "title": "Jun", "value": 1 },
    { "title": "Jul", "value": 2 },
    { "title": "Aug", "value": 2 },
    { "title": "Sep", "value": 3 },
    { "title": "Oct", "value": 1 },
    { "title": "Nov", "value": 1 },
    { "title": "Dec", "value": 3 }
  ]
}, {
  "title": "Logistics",
  "value": 30,
  "url":"#",
  "description":"click to drill-down",
  "data": [
    { "title": "Jan", "value": 2 },
    { "title": "Feb", "value": 3 },
    { "title": "Mar", "value": 1 },
    { "title": "Apr", "value": 5 },
    { "title": "May", "value": 2 },
    { "title": "Jun", "value": 1 },
    { "title": "Jul", "value": 2 },
    { "title": "Aug", "value": 2 },
    { "title": "Sep", "value": 3 },
    { "title": "Oct", "value": 1 },
    { "title": "Nov", "value": 1 },
    { "title": "Dec", "value": 3 }
  ]
}];
  constructor(private  AmCharts:AmChartsService) { }

  ngOnInit() {




  }
   
  ngAfterViewInit(){

     this.chart = this.AmCharts.makeChart("chartdiv3", {
      "type": "pie",
      "dataProvider": this.chartData,
      "valueField": "value",
      "titleField": "title",
      "labelText": "[[title]]: [[value]]",
      "pullOutOnlyOne": true,
      "titles": [{
        "text": "Tasks"
      }],
      "allLabels": []
    });
    
    // initialize step array
    this.chart.drillLevels = [{
      "title": "Departments",
      "data": this.chartData,
      
    }];
    
    // add slice click handler
    this.chart.addListener("clickSlice", function (event) {
      
      // get chart object
      var chart = event.chart;
      
      // check if drill-down data is avaliable
      if (event.dataItem.dataContext.data !== undefined) {
        
        // save for back button
        chart.drillLevels.push(event.dataItem.dataContext);
        
        // replace data
        chart.dataProvider = event.dataItem.dataContext.data;
        
        // replace title
        chart.titles[0].text = event.dataItem.dataContext.title;
        
        // add back link
        // let's add a label to go back to yearly data
        event.chart.addLabel(
          0, 25, 
          "< Go back",
          undefined, 
          undefined, 
          undefined, 
          undefined, 
          undefined, 
          undefined, 
          'javascript:drillUp();');
        
        // take in data and animate
        chart.validateData();
        chart.animateAgain();
      }
    });
     
 function drillUp() {
      
    // get level
    this.chart.drillLevels.pop();
    var level = this.chart.drillLevels[this.chart.drillLevels.length - 1];
    
    // replace data
    this.chart.dataProvider = level.data;
  
    // replace title
    this.chart.titles[0].text = level.title;
    
    // remove labels
    if (this.chart.drillLevels.length === 1)
      this.chart.clearLabels();
    
    // take in data and animate
    this.chart.validateData();
    this.chart.animateAgain();
  }
  }
 
  ngOnDestroy() {
    if (this.chart) 
      this.AmCharts.destroyChart(this.chart);
    }
}
