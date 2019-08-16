import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';

const routes: Routes = [
  {
    path: 'anonymous',
    loadChildren: () => import('./anonymous/anonymous.module').then(mod => mod.AnonymousModule)
  },
  {
    path: 'authenticated',
    loadChildren: () => import('./authenticated/authenticated.module').then(mod => mod.AuthenticatedModule)
  },
  {
    path: '',
    component: LandingPageComponent,
    pathMatch: 'full'
  },
  {
    path: '**',
    component: NotFoundComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
