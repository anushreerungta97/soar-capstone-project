import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InventoryRequestHistoryPageComponent } from './inventory-request-history-page.component';

describe('InventoryRequestHistoryPageComponent', () => {
  let component: InventoryRequestHistoryPageComponent;
  let fixture: ComponentFixture<InventoryRequestHistoryPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InventoryRequestHistoryPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InventoryRequestHistoryPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
