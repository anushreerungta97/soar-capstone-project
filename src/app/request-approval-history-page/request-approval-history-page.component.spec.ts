import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestApprovalHistoryPageComponent } from './request-approval-history-page.component';

describe('RequestApprovalHistoryPageComponent', () => {
  let component: RequestApprovalHistoryPageComponent;
  let fixture: ComponentFixture<RequestApprovalHistoryPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestApprovalHistoryPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestApprovalHistoryPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
