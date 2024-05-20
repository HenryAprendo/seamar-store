import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-create-user',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './create-user.component.html',
  styleUrl: './create-user.component.css'
})
export class CreateUserComponent {

  private fb = inject(FormBuilder);

  createForm:FormGroup;

  constructor(){
    this.createForm = this.buildForm();
  }

  private buildForm(){
    return this.fb.group({
      email: ['',[Validators.required]],
      password: ['',[Validators.required]]
    });
  }

  get emailField() {
    return this.createForm.get('email');
  }

  get emailFieldInvalid() {
    return this.emailField?.invalid && this.emailField.touched;
  }

  get passwordField() {
    return this.createForm.get('password');
  }

  get passwordFieldInvalid() {
    return this.passwordField?.invalid && this.passwordField.touched;
  }



}




