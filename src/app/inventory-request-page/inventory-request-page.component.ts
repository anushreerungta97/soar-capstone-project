import { Component, OnInit } from '@angular/core';
import { CartService } from '../appServices/cart.service';
import { ProductsService } from '../appServices/products.service';

@Component({
  selector: 'app-inventory-request-page',
  templateUrl: './inventory-request-page.component.html',
  styleUrls: ['./inventory-request-page.component.css']
})
export class InventoryRequestPageComponent implements OnInit {

  products : any;
  constructor(private productsService : ProductsService,
    private cartService  : CartService) { }

 
  ngOnInit(): void {
    this.getProducts();

    

  }

  getProducts(){
    this.productsService.getProductsList().subscribe(res=>{
      this.products =res;
    })
  }

  // addToCart(product) {
  //   this.cartService.addToCart(product);
  //   window.alert('Your product has been added to the cart!');
  // }
}

