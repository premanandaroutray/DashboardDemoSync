import { Component, OnInit } from '@angular/core';
import { AmChartsService,AmChart } from "@amcharts/amcharts3-angular";
@Component({
  selector: 'app-drilldown-bar',
  templateUrl: './drilldown-bar.component.html',
  styleUrls: ['./drilldown-bar.component.css']
})
export class DrilldownBarComponent implements OnInit {
  private chart: AmChart;

  

  constructor(private  AmCharts:AmChartsService) { }
  chartData = [{
    "category": 2009,
    "income": 23.5,
    "url": "#",
    "description": "click to drill-down",
    "months": [{
      "category": 1,
      "income": 1
    }, {
      "category": 2,
      "income": 2
    }, {
      "category": 3,
      "income": 1
    }, {
      "category": 4,
      "income": 3
    }, {
      "category": 5,
      "income": 2.5
    }, {
      "category": 6,
      "income": 1.1
    }, {
      "category": 7,
      "income": 2.9
    }, {
      "category": 8,
      "income": 3.5
    }, {
      "category": 9,
      "income": 3.1
    }, {
      "category": 10,
      "income": 1.1
    }, {
      "category": 11,
      "income": 1
    }, {
      "category": 12,
      "income": 3
    }]
  }, {
    "category": 2010,
    "income": 26.2,
    "url": "#",
    "description": "click to drill-down",
    "months": [{
      "category": 1,
      "income": 4
    }, {
      "category": 2,
      "income": 3
    }, {
      "category": 3,
      "income": 1
    }, {
      "category": 4,
      "income": 4
    }, {
      "category": 5,
      "income": 2
    }, {
      "category": 6,
      "income": 1
    }, {
      "category": 7,
      "income": 2
    }, {
      "category": 8,
      "income": 2
    }, {
      "category": 9,
      "income": 3
    }, {
      "category": 10,
      "income": 1
    }, {
      "category": 11,
      "income": 1
    }, {
      "category": 12,
      "income": 3
    }]
  }, {
    "category": 2011,
    "income": 30.1,
    "url": "#",
    "description": "click to drill-down",
    "months": [{
      "category": 1,
      "income": 2
    }, {
      "category": 2,
      "income": 3
    }, {
      "category": 3,
      "income": 1
    }, {
      "category": 4,
      "income": 5
    }, {
      "category": 5,
      "income": 2
    }, {
      "category": 6,
      "income": 1
    }, {
      "category": 7,
      "income": 2
    }, {
      "category": 8,
      "income": 2.5
    }, {
      "category": 9,
      "income": 3.1
    }, {
      "category": 10,
      "income": 1.1
    }, {
      "category": 11,
      "income": 1
    }, {
      "category": 12,
      "income": 3
    }]
  }];

  ngOnInit() {
  }
  ngAfterViewInit() {

    this.chart = this.AmCharts.makeChart("chartdiv4", {
      "type": "serial",
      "creditsPosition": "top-right",
      "autoMargins": false,
      "marginLeft": 30,
      "marginRight": 8,
      "marginTop": 10,
      "marginBottom": 26,
      "titles": [{
        "text": "Yearly data"
      }],
      "dataProvider": this.chartData,
      "startDuration": 1,
      "graphs": [{
        "alphaField": "alpha",
        "balloonText": "<span style='font-size:13px;'>[[title]] in [[category]]:<b>[[value]]</b> [[additional]]</span> <br>[[description]]",
        "dashLengthField": "dashLengthColumn",
        "fillAlphas": 1,
        "title": "Income",
        "type": "column",
        "valueField": "income",
        "urlField": "url"
      }],
      "categoryField": "category",
      "categoryAxis": {
        "gridPosition": "start",
        "axisAlpha": 0,
        "tickLength": 0
      }
    });
    
    this.chart.addListener("clickGraphItem", function(event) {
      if ('object' === typeof event.item.dataContext.months) {
    
        // set the monthly data for the clicked month
        event.chart.dataProvider = event.item.dataContext.months;
    
        // update the chart title
        event.chart.titles[0].text = event.item.dataContext.category + ' monthly data';
    
        // let's add a label to go back to yearly data
        event.chart.addLabel(
          35, 20,
          "< Go back to yearly",
          undefined,
          15,
          undefined,
          undefined,
          undefined,
          true,
          'javascript:resetChart();');
    
        // validate the new data and make the chart animate again
        event.chart.validateData();
        event.chart.animateAgain();
      }
    });
    
    // function which resets the chart back to yearly data
    function resetChart() {
      this.chart.dataProvider = this.chartData;
      this.chart.titles[0].text = 'Yearly data';
    
      // remove the "Go back" label
      this.chart.allLabels = [];
    
      this.chart.validateData();
      this.chart.animateAgain();
    }
  }

}
