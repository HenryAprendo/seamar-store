import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-category',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './create-category.component.html',
  styleUrl: './create-category.component.css'
})
export class CreateCategoryComponent {

  createForm = new FormGroup({
    name: new FormControl('',[Validators.required]),
  });

  get nameField() {
    return this.createForm.get('name');
  }

  get nameFieldInvalid() {
    return this.nameField?.invalid && this.nameField.touched;
  }


}
