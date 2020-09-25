import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RequestProductService {

  constructor(private http : HttpClient) { }

  

  onRequestProduct(data : any){
    return this.http.post('http://localhost:9090/request' , data)
  }


}

