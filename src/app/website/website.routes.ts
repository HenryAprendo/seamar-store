import { Route } from "@angular/router";

export default [
  {
    path: '',
    loadComponent: () => import('./components/website-layout/website-layout.component').then(m => m.WebsiteLayoutComponent),
  }
] satisfies Route[];
