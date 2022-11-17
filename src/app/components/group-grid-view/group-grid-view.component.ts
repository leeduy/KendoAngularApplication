import { Component, OnInit } from '@angular/core';
import { ScreenInfo } from 'src/app/models/model';

@Component({
  selector: 'group-grid-view',
  templateUrl: './group-grid-view.component.html',
  styleUrls: ['./group-grid-view.component.scss'],
})
export class GroupGridViewComponent implements OnInit {
  screens: ScreenInfo[];

  gridData: any[];

  constructor() {}

  ngOnInit(): void {
    this.screens = [
      {
        name: 'ProductID',
        alias: 'ProductID',
        group: true,
        hidden: false,
        template: null,
        editor: 'numeric',
        editTemplate: null,
      },
      {
        name: 'ProductName',
        alias: 'ProductName',
        group: false,
        hidden: false,
        template: null,
        editor: 'text',
        editTemplate: null,
      },
      {
        name: 'UnitPrice',
        alias: 'UnitPrice',
        group: false,
        hidden: false,
        template: null,
        editor: 'numeric',
        editTemplate: null,
      },
    ];

    this.gridData = [
      {
        ProductID: 1,
        ProductName: 'Chai',
        UnitPrice: 18,
      },
      {
        ProductID: 2,
        ProductName: 'Chang',
        UnitPrice: 19,
      },
      {
        ProductID: 3,
        ProductName: 'Aniseed Syrup',
        UnitPrice: 10,
      },
    ];
  }
}
