import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators, FormControl, FormGroup } from '@angular/forms';

import { UserService } from '../../service/user.service';
import { CreateUserDto } from '../../interface/user.model';

@Component({
  selector: 'app-create-user',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './create-user.component.html',
  styleUrl: './create-user.component.css',
  providers: [UserService]
})
export class CreateUserComponent implements OnInit {

  private fb = inject(FormBuilder);

  private userService = inject(UserService);

  createForm:FormGroup;

  constructor() {
    this.createForm = this.buildForm();
  }

  ngOnInit(): void {
    this.userService.findAll().subscribe(dta => console.log(dta))
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
            console.log(`User create: ${user.email} - role: ${user.role}`)
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




