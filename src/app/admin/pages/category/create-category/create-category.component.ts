import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CategoryService } from './../../../services/category.service';
import { CreateCategoryDTO } from '../../../interfaces/category.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-category',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './create-category.component.html',
  styleUrl: './create-category.component.css'
})
export class CreateCategoryComponent {

  private router = inject(Router);

  private fb = inject(FormBuilder);

  private categoryService = inject(CategoryService);

  createForm:FormGroup;

  constructor(){
    this.createForm = this.buildForm();
  }

  save() {
    const data:CreateCategoryDTO = this.createForm.value;
    if(this.createForm.valid) {
      this.categoryService.create({ ...data })
        .subscribe(() => this.router.navigate(['admin/category/list']));
    }
  }

  get nameField() {
    return this.createForm.get('name');
  }

  get nameFieldInvalid() {
    return this.nameField?.invalid && this.nameField.touched;
  }

  private buildForm() {
    return this.fb.group({
      name: ['',[Validators.required]]
    });
  }


}







