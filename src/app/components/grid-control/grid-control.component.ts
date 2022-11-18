import {
  ChangeDetectorRef,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  NgZone,
  Output,
  Renderer2,
  TemplateRef,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {
  BrowserSupportService,
  CellClickEvent,
  CellSelectionService,
  ChangeNotificationService,
  ColumnInfoService,
  ColumnReorderService,
  ColumnResizingService,
  ContextService,
  DetailsService,
  DomEventsService,
  EditService,
  ExcelService,
  FilterService,
  FocusRoot,
  GridComponent,
  GroupInfoService,
  GroupsService,
  LocalDataChangesService,
  NavigationService,
  PagerContextService,
  PDFService,
  ResponsiveService,
  ScrollRequestService,
  ScrollSyncService,
  SelectionService,
  SortService,
} from '@progress/kendo-angular-grid';
import { L10N_PREFIX, LocalizationService } from '@progress/kendo-angular-l10n';
import { groupBy, GroupDescriptor } from '@progress/kendo-data-query';
import { ScreenInfo } from 'src/app/models/model';

@Component({
  selector: 'my-grid',
  templateUrl: './grid-control.component.html',
  styleUrls: ['./grid-control.component.scss'],
  providers: [
    {
      provide: GridComponent,
      useExisting: GridControlComponent,
    },
    BrowserSupportService,
    SelectionService,
    DomEventsService,
    LocalDataChangesService,
    NavigationService,
    PagerContextService,
    ScrollRequestService,
    GroupsService,
    DetailsService,
    FocusRoot,
    EditService,
    LocalizationService,
    { provide: L10N_PREFIX, useValue: '' },
    CellSelectionService,
    GroupInfoService,
    ChangeNotificationService,
    FilterService,
    PDFService,
    ResponsiveService,
    ExcelService,
    ScrollSyncService,
    ColumnResizingService,
    ColumnReorderService,
    ColumnInfoService,
    SortService,
    ContextService,
  ],
})
export class GridControlComponent extends GridComponent {
  dataSourceGroup: any;
  groups: Array<GroupDescriptor>;

  //#region screenInfo
  private _screenInfo: ScreenInfo[];
  @Input()
  public set screenInfo(value: ScreenInfo[]) {
    this._screenInfo = value;

    // templates
    let fieldTemplates = this.templates?.map((q) => q.field);

    if (fieldTemplates && fieldTemplates.length > 0) {
      this.screenInfo
        .filter((q) => fieldTemplates.includes(q.name))
        .forEach((val, index) => {
          let tmpTemplate = this.templates.find((q) => q.field == val.name);
          if (tmpTemplate) {
            val.template = tmpTemplate.template;
          }
        });
    }

    // edit templates
    let fieldEditTemplates = this.editTemplates?.map((q) => q.field);

    if (fieldEditTemplates && fieldEditTemplates.length > 0) {
      this.screenInfo
        .filter((q) => fieldEditTemplates.includes(q.name))
        .forEach((val, index) => {
          let tmpEditTemplate = this.editTemplates.find(
            (q) => q.field == val.name
          );
          if (tmpEditTemplate) {
            val.editTemplate = tmpEditTemplate.template;
          }
        });
    }

    // group
    let fieldGroup = this.screenInfo.filter((q) => q.group).map((q) => q.name);

    if (fieldGroup.length > 0) {
      this.groups = [];
      fieldGroup.forEach((field, index) => {
        this.groups.push({ field: field });
      });

      this.dataSourceGroup = groupBy(this.dataSource, this.groups);
      this.dataSource = null;
    }
  }
  public get screenInfo(): ScreenInfo[] {
    return this._screenInfo;
  }
  //#endregion screenInfo

  //#region dataSource
  private _dataSource: any;
  @Input()
  public set dataSource(value: any) {
    this._dataSource = value;

    if (this.groups?.length > 0 && this._dataSource != null) {
      this.dataSourceGroup = groupBy(this._dataSource, this.groups);
      this.dataSource = null;
    }
  }
  public get dataSource(): any {
    return this._dataSource;
  }
  //#endregion dataSource

  //#region templates
  private _templates: Array<{
    field: string;
    template: TemplateRef<any> | null;
  }>;
  @Input()
  public set templates(
    value: Array<{
      field: string;
      template: TemplateRef<any> | null;
    }>
  ) {
    this._templates = value;

    // templates
    let fieldTemplates = this._templates?.map((q) => q.field);

    if (fieldTemplates && fieldTemplates.length > 0) {
      this.screenInfo
        .filter((q) => fieldTemplates.includes(q.name))
        .forEach((val, index) => {
          let tmpTemplate = this._templates.find((q) => q.field == val.name);
          if (tmpTemplate) {
            val.template = tmpTemplate.template;
          }
        });
    }
  }
  public get templates(): Array<{
    field: string;
    template: TemplateRef<any> | null;
  }> {
    return this._templates;
  }
  //#endregion templates

  //#region editTemplates
  private _editTemplates: Array<{
    field: string;
    template: TemplateRef<any> | null;
  }>;
  @Input()
  public set editTemplates(
    value: Array<{
      field: string;
      template: TemplateRef<any> | null;
    }>
  ) {
    this._editTemplates = value;

    // edit templates
    let fieldEditTemplates = this._editTemplates?.map((q) => q.field);

    if (fieldEditTemplates && fieldEditTemplates.length > 0) {
      this.screenInfo
        .filter((q) => fieldEditTemplates.includes(q.name))
        .forEach((val, index) => {
          let tmpEditTemplate = this._editTemplates.find(
            (q) => q.field == val.name
          );
          if (tmpEditTemplate) {
            val.editTemplate = tmpEditTemplate.template;
          }
        });
    }
  }
  public get editTemplates(): Array<{
    field: string;
    template: TemplateRef<any> | null;
  }> {
    return this._editTemplates;
  }
  //#endregion editTemplates

  @Input() editable: boolean;
  @Output() editableHandler = new EventEmitter<CellClickEvent>();

  constructor(
    supportService: BrowserSupportService,
    selectionService: SelectionService,
    cellSelectionService: CellSelectionService,
    wrapper: ElementRef,
    groupInfoService: GroupInfoService,
    groupsService: GroupsService,
    changeNotification: ChangeNotificationService,
    detailsService: DetailsService,
    editService: EditService,
    filterService: FilterService,
    pdfService: PDFService,
    responsiveService: ResponsiveService,
    renderer: Renderer2,
    excelService: ExcelService,
    ngZone: NgZone,
    scrollSyncService: ScrollSyncService,
    domEvents: DomEventsService,
    columnResizingService: ColumnResizingService,
    changeDetectorRef: ChangeDetectorRef,
    columnReorderService: ColumnReorderService,
    columnInfoService: ColumnInfoService,
    navigationService: NavigationService,
    sortService: SortService,
    scrollRequestService: ScrollRequestService,
    localization: LocalizationService,
    ctx: ContextService,
    private formBuilder: FormBuilder
  ) {
    super(
      supportService,
      selectionService,
      cellSelectionService,
      wrapper,
      groupInfoService,
      groupsService,
      changeNotification,
      detailsService,
      editService,
      filterService,
      pdfService,
      responsiveService,
      renderer,
      excelService,
      ngZone,
      scrollSyncService,
      domEvents,
      columnResizingService,
      changeDetectorRef,
      columnReorderService,
      columnInfoService,
      navigationService,
      sortService,
      scrollRequestService,
      localization,
      ctx
    );
  }

  cellClickHandler(args: CellClickEvent): void {
    // Nếu có set hàm riêng sẽ ưu tiên chạy hàm riêng. Ngược lại chạy hàm mặc định.
    if (this.editableHandler.observed) {
      this.editableHandler.emit(args);
    } else {
      if (!args.isEdited) {
        args.sender.editCell(
          args.rowIndex,
          args.columnIndex,
          this.createFormGroup(args.dataItem)
        );
      }
    }
  }

  override ngOnInit(): void {}

  override ngAfterViewInit(): void {}

  createFormGroup(dataItem: any): FormGroup {
    return this.formBuilder.group(dataItem);
  }
}
