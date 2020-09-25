import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserDetailsService } from '../appServices/user-details.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  // created a property to hold our form which has type form control
  registrationForm : FormGroup;

  constructor(private router : Router,
    private userDetailsservice : UserDetailsService) { }

    message : any

    

  ngOnInit(): void {

    // setting up the form and controlling
    // controls are key value pairs
    this.registrationForm = new FormGroup({
      // 'employeeId' : new FormControl(null, Validators.required),
      'name' : new FormControl(null, Validators.required),
      'email': new FormControl(null, [Validators.required,Validators.email]),
      'password' :  new FormControl(null,[Validators.required,Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}') ]),
      'typeOfEmployee' : new FormControl(null , Validators.required)
    });
  }

  // onSubmit(){
  //   console.log(this.registrationForm)

  // }

  onRegister(){
    this.userDetailsservice.register(this.registrationForm.value).subscribe( res => {
      console.log(res);
      if(res["status"] == 1){
        this.message=res["message"]
      }
      else
      this.message=res["message"]
      // this.router.navigate(['login'])
    });

  }



}
