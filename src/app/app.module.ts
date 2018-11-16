import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AgGridModule} from 'ag-grid-angular/main';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Resources } from './services/resources.service';
import { CustomizedCellComponent } from './customized-cell/customized-cell.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomizedCellComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AgGridModule.withComponents([CustomizedCellComponent])
  ],
  providers: [Resources], 
  bootstrap: [AppComponent]
})
export class AppModule { }
