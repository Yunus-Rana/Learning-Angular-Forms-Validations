import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  imports: [ReactiveFormsModule],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  loginForm = new FormGroup({
    name: new FormControl('', 
      [
      Validators.required,
      Validators.minLength(2),
      Validators.maxLength(20),
      Validators.pattern(/^[a-zA-Z ]*$/)
    ]),
    email: new FormControl('',[
      Validators.required,
      Validators.email
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
      Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/)
    ]),
  });

  get name(){
    return this.loginForm.get('name')
  }
  get email() { 
    return this.loginForm.get('email'); 
  }
  get password() { 
    return this.loginForm.get('password'); 
  }

  handleProfile(): void {
    if (this.loginForm.valid) {
      console.log(this.loginForm.value);
    } else {
      this.loginForm.markAllAsTouched();
    }
  }


  reset(): void {
    this.loginForm.reset({
      name: '',
      email: '',
      password: '',
    });
  }

  submit(): void {
    console.log(this.loginForm.get('name')?.value);
    console.log(this.loginForm.get('email')?.value);
    console.log(this.loginForm.get('password')?.value);
  }
}
