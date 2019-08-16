import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';
import { AuthenticationGuard } from './core/guards/authentication.guard';

const routes: Routes = [
  { path: '', component: LandingPageComponent, pathMatch: 'full' },
  {
    path: 'anonymous',
    loadChildren: () => import('./anonymous/anonymous.module').then(mod => mod.AnonymousModule)
  },
  {
    path: 'authenticated',
    canActivate: [AuthenticationGuard],
    loadChildren: () => import('./authenticated/authenticated.module').then(mod => mod.AuthenticatedModule)
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
