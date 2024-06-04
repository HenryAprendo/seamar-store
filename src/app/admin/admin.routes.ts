import { Route } from "@angular/router";

export default [
  {
    path: '',
    loadComponent: () => import('./components/admin-layout/admin-layout.component').then(m => m.AdminLayoutComponent),
    children: [
      {
        path: '',
        redirectTo: 'category',
        pathMatch: 'full'
      },
      {
        path: 'category',
        loadChildren: () => import('./pages/category/category.routes')
      }
    ]
  },
] satisfies Route[];
