import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaintenanceProductsComponent } from './maintenance-products.component';

describe('MaintenanceProductsComponent', () => {
  let component: MaintenanceProductsComponent;
  let fixture: ComponentFixture<MaintenanceProductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaintenanceProductsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaintenanceProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
