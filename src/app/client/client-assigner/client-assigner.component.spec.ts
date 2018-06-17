import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientAssignerComponent } from './client-assigner.component';

describe('ClientAssignerComponent', () => {
  let component: ClientAssignerComponent;
  let fixture: ComponentFixture<ClientAssignerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientAssignerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientAssignerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
