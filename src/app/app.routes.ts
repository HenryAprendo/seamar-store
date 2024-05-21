import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'website',
    pathMatch: 'full'
  },
  {
    path: 'website',
    loadChildren: () => import('./website/website.routes'),
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.routes'),
  }
];
