import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path:'anonymous',
    loadChildren: () => import('./anonymous/anonymous.module').then(mod=>mod.AnonymousModule)
  },
  {
    path:'authenticated',
    loadChildren: () => import('./authenticated/authenticated.module').then(mod=>mod.AuthenticatedModule)
  },
  {
    path:'',
    redirectTo: '',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
