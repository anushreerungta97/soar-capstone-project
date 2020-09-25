import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserDetailsService {

  apiUrl = "http://localhost:9090"

  constructor(private http: HttpClient) { }



  register(data){
    const url = this.apiUrl + '/users'
    return this.http.post(url , data);
  }

  login(data){
    const url = this.apiUrl + '/login'
    return this.http.post(url , data);
  }
  



}
