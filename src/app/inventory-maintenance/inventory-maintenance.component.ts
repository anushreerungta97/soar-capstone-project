import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../appServices/products.service';

@Component({
  selector: 'app-inventory-maintenance',
  templateUrl: './inventory-maintenance.component.html',
  styleUrls: ['./inventory-maintenance.component.css']
})
export class InventoryMaintenanceComponent implements OnInit {

  constructor(private productsService : ProductsService) { }

  products : any

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(){
    this.productsService.getProductsList().subscribe(res=>{
      this.products =res;
    })
  }

}
