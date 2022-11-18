import {
  ChangeDetectorRef,
  Component,
  OnInit,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { GridDataResult, PageChangeEvent } from '@progress/kendo-angular-grid';
import { customers } from 'src/app/models/data';
import { ScreenInfo } from 'src/app/models/model';
import { GridControlComponent } from '../grid-control/grid-control.component';

@Component({
  selector: 'grid-paging-view',
  templateUrl: './grid-paging-view.component.html',
  styleUrls: ['./grid-paging-view.component.scss'],
})
export class GridPagingViewComponent implements OnInit {
  @ViewChild('gridPaging', { static: true })
  gridPaging: GridControlComponent;
  dataSource: GridDataResult;
  screens: ScreenInfo[];

  constructor(private cdref: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.screens = [
      {
        name: 'Id',
        alias: 'ID',
        group: false,
        hidden: false,
        template: null,
        editor: 'text',
        editTemplate: null,
      },
      {
        name: 'CompanyName',
        alias: 'Company',
        group: false,
        hidden: false,
        template: null,
        editor: 'text',
        editTemplate: null,
      },
      {
        name: 'ContactName',
        alias: 'Contact',
        group: false,
        hidden: false,
        template: null,
        editor: 'text',
        editTemplate: null,
      },
      {
        name: 'Address',
        alias: 'Address',
        group: false,
        hidden: false,
        template: null,
        editor: 'text',
        editTemplate: null,
      },
    ];
  }

  ngAfterViewInit(): void {
    this.loadItems();

    this.cdref.detectChanges();
  }

  loadItems(): void {
    this.dataSource = {
      data: customers.slice(
        this.gridPaging.pageIndex! * this.gridPaging.myPageSize!,
        this.gridPaging.pageIndex! * this.gridPaging.myPageSize! +
          this.gridPaging.myPageSize!
      ),
      total: customers.length,
    };
  }

  pageChange(event: PageChangeEvent): void {
    this.gridPaging.pageIndex = event.skip / event.take;
    this.loadItems();
  }
}
