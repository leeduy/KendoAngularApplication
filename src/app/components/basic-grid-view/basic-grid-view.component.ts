import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { ScreenInfo } from 'src/app/models/model';

@Component({
  selector: 'basic-grid-view',
  templateUrl: './basic-grid-view.component.html',
  styleUrls: ['./basic-grid-view.component.scss'],
})
export class BasicGridViewComponent implements OnInit {
  @ViewChild('testTemplate', { static: true }) testTemplate: TemplateRef<any>;
  @ViewChild('testEditTemplate', { static: true })
  testEditTemplate: TemplateRef<any>;

  templates: Array<{ field: string; template: TemplateRef<any> }>;
  editTemplates: Array<{ field: string; template: TemplateRef<any> }>;

  screens: ScreenInfo[];

  gridData: any[];

  constructor() {}

  ngOnInit(): void {
    this.screens = [
      {
        name: 'ProductID',
        alias: 'ProductID',
        group: false,
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

    this.templates = [
      {
        field: 'ProductName',
        template: this.testTemplate,
      },
      {
        field: 'UnitPrice',
        template: this.testTemplate,
      },
    ];

    this.editTemplates = [
      {
        field: 'UnitPrice',
        template: this.testEditTemplate,
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
