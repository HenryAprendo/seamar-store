import { Route } from "@angular/router";

export default [
  {
    path: '',
    loadComponent: () => import('./category-layout/category-layout.component').then(m => m.CategoryLayoutComponent),
    children: [
      {
        path: '',
        redirectTo: 'create',
        pathMatch: 'full'
      },
      {
        path: 'list',
        loadComponent: () => import('./category-list/category-list.component').then(m => m.CategoryListComponent)
      },
      {
        path: 'create',
        loadComponent: () => import('./create-category/create-category.component').then(m => m.CreateCategoryComponent)
      },
      {
        path: 'edit',
        loadComponent: () => import('./edit-category/edit-category.component').then(m => m.EditCategoryComponent)
      }
    ]
  }
] satisfies Route[];
