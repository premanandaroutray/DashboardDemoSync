import { Component, OnInit } from '@angular/core';
import{MatDialog}from '@angular/material';
import{MatDialogRef}from '@angular/material';
declare var nestedTables:any;
@Component({
  selector: 'app-nestedgridmodal',
  templateUrl: './nestedgridmodal.component.html',
  styleUrls: ['./nestedgridmodal.component.css']
})
export class NestedgridmodalComponent implements OnInit {

  constructor(public thisDialogRef:MatDialogRef<NestedgridmodalComponent>) { }

  ngOnInit() {
    var dataInJson = [{
      "data": {
         "name": "b1",
         "street": "s1",
         "city": "c1",
         "departments": 10,
         "offices": 15
      },
      "kids": [{
         "data": {
            "department": "HR",
            "supervisor": "Isidor Bristol",
            "floor": 1,
            "employees": 15
         },
         "kids": [{
               "data": {
                  "name": "Klement Nikodemos",
                  "phone": "+938462",
                  "hire_date": "January 1, 2010",
                  "id": 3456
               },
               "kids": []
            }, {
               "data": {
                  "name": "Madhava Helmuth",
                  "phone": "+348902",
                  "hire_date": "May 23, 2002",
                  "id": 1234
               },
               "kids": []
            }, {
               "data": {
                  "name": "Andria Jesse",
                  "phone": "456123",
                  "hire_date": "October 23, 2011",
                  "id": 9821
               },
               "kids": []
            }
    
         ]
      }, {
         "data": {
            "department": "development",
            "supervisor": "Jim Linwood",
            "floor": 2,
            "employees": 18
         },
         "kids": [{
               "data": {
                  "name": "Origenes Maxwell",
                  "phone": "345892",
                  "hire_date": "February 1, 2004",
                  "id": 6234
               },
               "kids": []
            }
    
         ]
      }, {
         "data": {
            "department": "testing",
            "supervisor": "Zekeriya Seok",
            "floor": 4,
            "employees": 11
         },
         "kids": []
    
      }]
    }, {
      "data": {
         "name": "b2",
         "street": "s10",
         "city": "c2",
         "departments": 3,
         "offices": 10
      },
      "kids": [{
         "data": {
            "department": "development",
            "supervisor": "Gallagher Howie",
            "floor": 8,
            "employees": 24
         },
         "kids": [{
               "data": {
                  "name": "Wat Dakota"
               },
               "kids": []
            }
    
         ]
      }, {
         "data": {
            "department": "testing",
            "supervisor": "Shirley Gayle",
            "floor": 4,
            "employees": 11
         },
         "kids": []
    
      }]
    
    }, {
      "data": {
         "name": "b3",
         "street": "s3",
         "city": "c3",
         "departments": 2,
         "offices": 1
      },
      "kids": [{
         "data": {
            "department": "development"
         },
         "kids": [{
               "data": {
                  "name": "Wat Dakota"
               },
               "kids": []
            }
    
         ]
      }, {
    
      }]
    },
    
    {
      "data": {
         "name": "b4",
         "city": "c4"
      },
      "kids": []
    }
    
    ];
    
    var settings = {
      "iDisplayLength": 20,
      "bLengthChange": false,
      "bFilter": false,
      "bSort": false,
      "bInfo": false
    };

    var table = new nestedTables.TableHierarchy("example", dataInJson, settings);
    table.initializeTableHierarchy();
    
    var tableEle = document.querySelector( "#example .table" );
    tableEle.addEventListener("onShowChildHierarchy", function(e) {
        console.log(e);
    });
    
    tableEle.addEventListener("onHideChildHierarchy", function(e) {
        console.log(e);
    });
  }
  onCloseCancel()
  {

this.thisDialogRef.close();

  }
}
