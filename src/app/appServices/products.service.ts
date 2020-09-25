import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})


// export class Product{
//   // id : Number
//   type : String
//   name : String
//   price : Number
//   imageUrl : String
//   available : String

//   constructor( imageUrl, type, name , price,  available){
//     // this.id=id
//     this.type =type
//     this.name = name
//     this.price = price
//     this.imageUrl = imageUrl
//     this.available = available

//   }
// }
export class ProductsService {

  constructor(private http : HttpClient) { }

  

  getProductsList(){
    return this.http.get('http://localhost:9090/products');
  }


}
