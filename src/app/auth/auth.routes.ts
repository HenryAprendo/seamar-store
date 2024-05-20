import { Route } from "@angular/router";

export default [
  {
    path: '',
    loadComponent: () => import('./components/auth-layout/auth-layout.component').then(m => m.AuthLayoutComponent),
    children: [
      {
        path: '',
        redirectTo: 'create-user',
        pathMatch: 'full',
      },
      {
        path: 'create-user',
        loadComponent: () => import('./pages/create-user/create-user.component').then(m => m.CreateUserComponent),
      }
    ]
  }

] satisfies Route[];
