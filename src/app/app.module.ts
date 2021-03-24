import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CustomGridComponent } from './custom-grid/custom-grid.component';
import { jqxGridModule } from 'jqwidgets-ng/jqxgrid';
import { jqxDropDownListModule } from 'jqwidgets-ng/jqxdropdownlist';
import { jqxInputModule } from 'jqwidgets-ng/jqxinput';

@NgModule({
  declarations: [
    AppComponent,
    CustomGridComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    jqxGridModule,
    jqxDropDownListModule,
    jqxInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
