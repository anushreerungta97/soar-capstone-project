import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InventoryMaintenanceComponent } from './inventory-maintenance.component';

describe('InventoryMaintenanceComponent', () => {
  let component: InventoryMaintenanceComponent;
  let fixture: ComponentFixture<InventoryMaintenanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InventoryMaintenanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InventoryMaintenanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
