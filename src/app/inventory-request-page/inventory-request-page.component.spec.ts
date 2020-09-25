import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InventoryRequestPageComponent } from './inventory-request-page.component';

describe('InventoryRequestPageComponent', () => {
  let component: InventoryRequestPageComponent;
  let fixture: ComponentFixture<InventoryRequestPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InventoryRequestPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InventoryRequestPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
