import { Component, OnInit, inject, signal } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from '../../../services/category.service';
import { CommonModule } from '@angular/common';
import { of, switchMap } from 'rxjs';
import { UpdateCategoryDTO } from '../../../interfaces/category.model';

@Component({
  selector: 'app-edit-category',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './edit-category.component.html',
  styleUrl: './edit-category.component.css'
})
export class EditCategoryComponent implements OnInit {

  private route = inject(ActivatedRoute);

  private router = inject(Router);

  private fb = inject(FormBuilder);

  private categoryService = inject(CategoryService);

  editForm:FormGroup;

  private categoryId = signal(-1);

  constructor(){
    this.editForm = this.buildForm();
  }

  ngOnInit(): void {
    this.route.paramMap.pipe(
      switchMap(param => {
        let dataId = param.get('id');
        let id = dataId ? parseInt(dataId) : null;

        if(id){
          this.categoryId.set(id)
          return this.categoryService.findOne(id);
        }
        return of(null);
      })
    ).subscribe(data => { if(data) this.editForm.patchValue(data) })
  }

  edit() {
    const data: UpdateCategoryDTO = this.editForm.value;
    if(this.editForm.valid) {
      this.categoryService.update(this.categoryId(), { ...data })
        .subscribe(() => this.router.navigate(['admin/category/list']));
    }
  }

  get nameField() {
    return this.editForm.get('name');
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
