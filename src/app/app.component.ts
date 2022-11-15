import { Component } from '@angular/core';
import { groupBy, GroupDescriptor } from '@progress/kendo-data-query';
import { ScreenInfo } from './models/model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'KendoAngularApplication';
}
