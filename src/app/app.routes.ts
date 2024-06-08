import { Routes } from '@angular/router';
import HomeComponent from '@pages/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'new',
    loadComponent: () => import('@pages/new/new.component'),
  },
  {
    path: 'edit/:id',
    loadComponent: () => import('@pages/edit/edit.component'),
  },
  {
    path: 'tale/:id',
    loadComponent: () => import('@pages/tale/tale.component'),
  },
  { path: '**', redirectTo: '/', pathMatch: 'full' },
];
export default routes;
