import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators, FormGroup } from '@angular/forms';

import { UserService } from '../../service/user.service';
import { CreateUserDto } from '../../interface/user.model';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-create-user',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './create-user.component.html',
  styleUrl: './create-user.component.css',
  providers: [UserService]
})
export class CreateUserComponent implements OnInit {

  private fb = inject(FormBuilder);

  private userService = inject(UserService);

  private router = inject(Router);

  createForm:FormGroup;

  constructor() {
    this.createForm = this.buildForm();
  }

  ngOnInit(): void {

  }

  saveUser() {

    let data: CreateUserDto = {
      ...this.createForm.value,
      role: 'admin'
    };

    if(this.createForm.valid) {

      this.userService.save(data)
        .subscribe({
          next: user => {
            if(user) {
              this.router.navigate(['./auth/login']);
            }
          },
          error: (err) => {
            console.log(err)
          }
        })

    } else {
      this.createForm.markAllAsTouched();
    }
  }

  private buildForm() {
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




