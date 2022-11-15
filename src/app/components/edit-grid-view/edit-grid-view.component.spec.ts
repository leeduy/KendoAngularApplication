import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditGridViewComponent } from './edit-grid-view.component';

describe('EditGridViewComponent', () => {
  let component: EditGridViewComponent;
  let fixture: ComponentFixture<EditGridViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditGridViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditGridViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
