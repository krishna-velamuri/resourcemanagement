import { Component, OnInit } from '@angular/core';
import {Resources} from './services/resources.service';
import { PARAMETERS } from '@angular/core/src/util/decorators';
import { CustomizedCellComponent } from './customized-cell/customized-cell.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit{
  title = 'Resource Management';
  private gridApi;
  private gridColumnApi;
  private columnDefs;
  private sortingOrder;
  private frameworkComponents;

 employess : any;
constructor(private _resources: Resources) {
  this.columnDefs = [
    { headerName:"Name",field:"EmployeeName",sortingOrder:["asc","desc"],suppressSizeToFit:"true"},
    { headerName:"PS Id",field:"PSID"},
    { headerName:"Designation",field:"Designation"},
    { headerName:"Billable",field:"Billable", cellStyle: function(params){ if(params.value === true){ return {color:'green',backgroundColor: 'green'} } else {return {color:'red',backgroundColor: 'red'}} }},
    { headerName:"Utilization", field:"Utilization", cellRenderer:"percentCellRender", filter:"agNumberColumnFilter" },
    { headerName:"Total Experience",field:"YearsofExperience", filter:"agNumberColumnFilter"},
    { headerName:"Rank",field:"Rank"},
    { headerName:"Valid Passport",field:"ValidPassport"},
    { headerName:"Joining Date",field:"JoiningDate", filter:"agDateColumnFilter"},
    { headerName:"LTI Experince",field:"LTIExperience", filter:"agNumberColumnFilter"},
    { headerName:"Certifications",field:"Certifications"},
    { headerName:"Key Skills",field:"KeySkills"},
    { headerName:"Current Project",field:"CurrentProject"},
    { headerName:"Achievements",field:"Achievements"},
    { headerName:"Resource Available Date",field:"ResourceAvailableDate", filter:"agDateColumnFilter"}
  ];
  this.sortingOrder = ["desc","asc",null];
  this.frameworkComponents = {
    percentCellRender : CustomizedCellComponent
  }
}
onGridReady(params){
this.gridApi = params.api;
this.gridColumnApi = params.columnApi;
params.api.setRowData(this.employess);
params.api.sizeColumnsToFit()
params.columnApi.autoSizeColumns()
}
ngOnInit(){
  this.employess = this._resources.getResources();
  
  //console.log(this.employess);
}
}

