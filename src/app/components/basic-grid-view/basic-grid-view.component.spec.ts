import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicGridViewComponent } from './basic-grid-view.component';

describe('BasicGridViewComponent', () => {
  let component: BasicGridViewComponent;
  let fixture: ComponentFixture<BasicGridViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasicGridViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BasicGridViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
