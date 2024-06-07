import { Route } from "@angular/router";

export default [
  {
    path: '',
    loadComponent: () => import('./product-layout/product-layout.component').then(m => m.ProductLayoutComponent),
  }
] satisfies Route[];
