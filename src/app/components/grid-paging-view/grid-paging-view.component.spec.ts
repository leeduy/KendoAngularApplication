import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridPagingViewComponent } from './grid-paging-view.component';

describe('GridPagingViewComponent', () => {
  let component: GridPagingViewComponent;
  let fixture: ComponentFixture<GridPagingViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GridPagingViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GridPagingViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
