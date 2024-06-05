import { Component, OnInit, WritableSignal, inject, signal } from '@angular/core';
import { CategoryService } from '../../../services/category.service';
import { Category } from '../../../interfaces/category.model';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-category-list',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './category-list.component.html',
  styleUrl: './category-list.component.css'
})
export class CategoryListComponent implements OnInit {

  private route = inject(Router);

  private categoryService = inject(CategoryService);

  categories: WritableSignal<Category[]> = signal([]);

  ngOnInit(): void {
    this.categoryService.findAll()
      .subscribe(data => {
        this.categories.set(data);
        console.log(data);
      })
  }

  goToCreateForm(){
    this.route.navigate(['admin/category/create'])
  }

}
