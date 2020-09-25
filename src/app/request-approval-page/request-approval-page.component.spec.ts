import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestApprovalPageComponent } from './request-approval-page.component';

describe('RequestApprovalPageComponent', () => {
  let component: RequestApprovalPageComponent;
  let fixture: ComponentFixture<RequestApprovalPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestApprovalPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestApprovalPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
