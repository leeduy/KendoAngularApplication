import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GridModule } from '@progress/kendo-angular-grid';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GridControlComponent } from './components/grid-control/grid-control.component';
import { BasicGridViewComponent } from './components/basic-grid-view/basic-grid-view.component';
import { GroupGridViewComponent } from './components/group-grid-view/group-grid-view.component';
import { EditGridViewComponent } from './components/edit-grid-view/edit-grid-view.component';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DropDownListModule } from '@progress/kendo-angular-dropdowns';
import { GridPagingViewComponent } from './components/grid-paging-view/grid-paging-view.component';

@NgModule({
  declarations: [
    AppComponent,
    GridControlComponent,
    BasicGridViewComponent,
    GroupGridViewComponent,
    EditGridViewComponent,
    GridPagingViewComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    GridModule,
    InputsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    DropDownListModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
