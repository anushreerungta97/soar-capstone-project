import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-maintenance-products',
  templateUrl: './maintenance-products.component.html',
  styleUrls: ['./maintenance-products.component.css']
})
export class MaintenanceProductsComponent implements OnInit {

  @Input() name:string;
  @Input() type:string;
  @Input() price : string;
  @Input() imgUrl : string;


  constructor() { }

  ngOnInit(): void {
  }

}
