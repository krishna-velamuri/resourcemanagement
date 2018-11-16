import { Component, OnInit } from '@angular/core';
import { ICellRendererAngularComp} from 'ag-grid-angular'

@Component({
  selector: 'app-customized-cell',
  templateUrl: './customized-cell.component.html',
  styleUrls: ['./customized-cell.component.less']
})
export class CustomizedCellComponent implements OnInit, ICellRendererAngularComp {
private cellValue:any;
private color:string;
  constructor() { }

  ngOnInit() {
  }
  refresh(params:any):boolean{
    this.cellValue = params.value;
    if(this.cellValue >= 70)
      this.color="green";
    else if(this.cellValue >= 50)
      this.color="orange";
    else
      this.color="red";
    return true;
  }
agInit(params:any){
  this.cellValue = params.value;
  if(this.cellValue >= 70)
      this.color="green";
    else if(this.cellValue >= 50)
      this.color="orange";
    else
      this.color="red";
  //console.log(params.value);
}
}
