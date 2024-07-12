import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  loginForm: FormGroup;
  submitted = false;

  constructor(private router: Router,private fb: FormBuilder) { }


  ngOnInit() {
    this.loginForm = this.fb.group({
      
        email: ['', [Validators.required, Validators.email,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
        password: ['', [Validators.required, Validators.minLength(6)]]
    });
}

get f() { return this.loginForm.controls; }

  onSubmit(): void {
    this.submitted = true;

        if (this.loginForm.invalid) {
          return;
      }
      else{
        this.router.navigate(['home']);
      }
        
  }

  
}
