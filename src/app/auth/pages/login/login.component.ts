import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators, FormGroup } from '@angular/forms';
import { AuthService } from '../../service/auth.service';
import { LoginUserDto } from '../../interface/user.model';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  private fb = inject(FormBuilder);

  private authService = inject(AuthService);

  loginForm: FormGroup;

  constructor(){
    this.loginForm = this.buildForm();
  }

  logIn() {

    if(this.loginForm.valid) {

      const { email, password } = this.loginForm.value as LoginUserDto;

      this.authService.login(email,password)
        .subscribe({
          next: response => {
            console.log(response.access_token)
          },
          error: err => {
            console.log(err)
          }
        })

    }

  }

  private buildForm() {
    return this.fb.group({
      email: ['',[Validators.required]],
      password: ['',[Validators.required]]
    });
  }

  get emailField() {
    return this.loginForm.get('email');
  }

  get emailFieldInvalid() {
    return this.emailField?.invalid && this.emailField.touched;
  }

  get passwordField() {
    return this.loginForm.get('password');
  }

  get passwordFieldInvalid() {
    return this.passwordField?.invalid && this.passwordField.touched;
  }


}
