import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserDetailsService } from '../appServices/user-details.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm : FormGroup;
  message:string;
  constructor(private router : Router,
    private userDetailsService : UserDetailsService) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      // 'employeeId' : new FormControl(null, Validators.required),
      'email': new FormControl(null, [Validators.required,Validators.email]),
      'password' :  new FormControl(null,[Validators.required,Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}') ]),
    });

    this.onLogin();
  }
  onLogin(){
    this.userDetailsService.login(this.loginForm.value).subscribe( res => {
      console.log(res);
      if(res["status"] == 1){
        this.message=res["message"]
        this.router.navigate(['/inventory-request-page']);
      }
      else
      this.message=res["message"]
      // this.router.navigate(['/inventory-request-page']);
      // else this.message = "invalid cfedentials";
    });
  }

  // onLogin(){
  //   this.router.navigate(['/inventory-request-page'])
  // }

  
}
