import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from 'src/app/pages/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'new',
    loadComponent: () => import('src/app/pages/new/new.component'),
  },
  {
    path: 'edit/:id',
    loadComponent: () => import('src/app/pages/edit/edit.component'),
  },
  {
    path: 'tale/:id',
    loadComponent: () => import('src/app/pages/tale/tale.component'),
  },
  { path: '**', redirectTo: '/', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
