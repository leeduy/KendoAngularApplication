import {
  ChangeDetectorRef,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  NgZone,
  Renderer2,
  SimpleChanges,
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
  private _screenInfo: ScreenInfo[];
  @Input() set screenInfo(value: ScreenInfo[]) {
    this._screenInfo = value;
  }
  get screenInfo(): ScreenInfo[] {
    return this._screenInfo;
  }

  @Input() groups: Array<GroupDescriptor>;
  @Input() dataSource: any;
  @Input() editable: boolean;
  @Input() editableHandler: EventEmitter<CellClickEvent>;

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
    if (!args.isEdited) {
      args.sender.editCell(
        args.rowIndex,
        args.columnIndex,
        this.createFormGroup(args.dataItem)
      );
    }
  }

  override ngAfterViewInit(): void {}

  createFormGroup(dataItem: any): FormGroup {
    return this.formBuilder.group({
      ProductID: dataItem.ProductID,
      ProductName: dataItem.ProductName,
      UnitPrice: dataItem.UnitPrice,
    });
  }
}
