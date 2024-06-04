import { Route } from "@angular/router";

export default [
  {
    path: '',
    loadComponent: () => import('./components/admin-layout/admin-layout.component').then(m => m.AdminLayoutComponent),
    children: [

    ]
  },
] satisfies Route[]
