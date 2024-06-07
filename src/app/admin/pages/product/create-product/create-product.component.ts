import { CommonModule } from '@angular/common';
import { Component, OnInit, WritableSignal, inject, signal } from '@angular/core';
import { ReactiveFormsModule, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { CategoryService } from '../../../services/category.service';
import { Category } from '../../../interfaces/category.model';

@Component({
  selector: 'app-create-product',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './create-product.component.html',
  styleUrl: './create-product.component.css'
})
export class CreateProductComponent implements OnInit {

  private fb = inject(FormBuilder);

  private categoryService = inject(CategoryService);

  createForm:FormGroup;

  categories:WritableSignal<Category[]> = signal([]);

  constructor(){
    this.createForm = this.buildForm();
  }

  ngOnInit(): void {
    this.categoryService.findAll()
      .subscribe(data =>
        this.categories.set(data)
      );
  }

  private buildForm() {
    return this.fb.group({
      title: ['',[Validators.required]],
      description: ['',[Validators.required]],
      price: [0,[Validators.required]],
      quantity_available: [0,[Validators.required]],
      image: ['',[Validators.required]],
      categoryId: [0,[Validators.required]]
    });
  }

  get titleField() { return this.createForm.get('title'); }

  get descriptionField() { return this.createForm.get('description'); }

  get priceField() { return this.createForm.get('price'); }

  get quantityAvailableField() { return this.createForm.get('quantity_available'); }

  get imageField(){ return this.createForm.get('image'); }

  get categoryIdField() { return this.createForm.get('categoryId'); }


  getfieldInvalid(nameControl:string) {
    const control = this.createForm.get(nameControl);
    return control?.invalid && control.touched;
  }

}



