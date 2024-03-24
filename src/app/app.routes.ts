import { Routes } from '@angular/router';
import { HomeComponent } from '@app/pages/home/home.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'new',
    loadComponent: () => import('@app/pages/new/new.component'),
  },
  {
    path: 'edit/:id',
    loadComponent: () => import('@app/pages/edit/edit.component'),
  },
  {
    path: 'tale/:id',
    loadComponent: () => import('@app/pages/tale/tale.component'),
  },
  { path: '**', redirectTo: '/', pathMatch: 'full' },
];
