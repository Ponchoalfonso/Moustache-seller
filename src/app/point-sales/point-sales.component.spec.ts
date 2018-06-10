import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PointSalesComponent } from './point-sales.component';

describe('PointSalesComponent', () => {
  let component: PointSalesComponent;
  let fixture: ComponentFixture<PointSalesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PointSalesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PointSalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
