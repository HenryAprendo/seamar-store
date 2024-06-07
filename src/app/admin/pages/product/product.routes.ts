import { Route } from "@angular/router";

export default [
  {
    path: '',
    loadComponent: () => import('./product-layout/product-layout.component').then(m => m.ProductLayoutComponent),
    children: [
      {
        path: '',
        redirectTo: 'create-product',
        pathMatch: 'full'
      },
      {
        path: 'create-product',
        loadComponent: () => import('./create-product/create-product.component').then(m => m.CreateProductComponent),
      }
    ]
  }
] satisfies Route[];
