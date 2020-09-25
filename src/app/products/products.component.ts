import { Component, Input, OnInit } from '@angular/core';
import { ProductsService} from 'src/app/appServices/products.service';
import {CartService} from 'src/app/appServices/cart.service'
import {RequestProductService} from 'src/app/appServices/request-product.service'
import { FormControl, FormGroup } from '@angular/forms';
// import {Product} from 'src/app/appServices/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})


export class ProductsComponent implements OnInit {

  requestForm  : FormGroup

  id : any

  @Input() name:string;
  @Input() type:string;
  @Input() available :string;
  @Input() price : string;
  @Input() imgUrl : string;

  constructor(private productsService : ProductsService,
    private casrtService : CartService,
    private requestProductService : RequestProductService) {
   
      this.requestForm = new FormGroup({
        
        'remarks' : new FormControl(null, [])
      })
   }

  

  ngOnInit(): void {
    

  }

  onRequestProduct(id : any ){
    const data = {
      product_id : id,
      remarks: this.requestForm.value['remarks'],
      price : this.price,
      user_id : id
    };

    this.requestProductService.onRequestProduct(data).subscribe( res=>{
      console.log(res)});
  }
  
}




