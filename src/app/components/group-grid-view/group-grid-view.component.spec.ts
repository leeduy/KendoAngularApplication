import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupGridViewComponent } from './group-grid-view.component';

describe('GroupGridViewComponent', () => {
  let component: GroupGridViewComponent;
  let fixture: ComponentFixture<GroupGridViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GroupGridViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GroupGridViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
