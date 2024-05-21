import { Route } from "@angular/router";

export default [
  {
    path: '',
    loadComponent: () => import('./components/auth-layout/auth-layout.component').then(m => m.AuthLayoutComponent),
    children: [
      {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full',
      },
      {
        path: 'create-user',
        loadComponent: () => import('./pages/create-user/create-user.component').then(m => m.CreateUserComponent),
      },
      {
        path: 'login',
        loadComponent: () => import('./pages/login/login.component').then(m => m.LoginComponent),
      }
    ]
  }

] satisfies Route[];
