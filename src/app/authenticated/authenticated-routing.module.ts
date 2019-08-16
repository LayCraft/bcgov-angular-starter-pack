import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SecretPageComponent } from './secret-page/secret-page.component';
import { SecretFormComponent } from './secret-form/secret-form.component';
import { AuthenticatedComponent } from './authenticated.component';


const routes: Routes = [
  {
    path: '',
    component: AuthenticatedComponent,
    children: [
      {
        // set the default component to route to for this user
        path: '',
        redirectTo: 'secret-page',
        pathMatch: 'full'
      },
      {
        path: 'secret-page',
        component: SecretPageComponent
      },
      {
        path: 'secret-form',
        component: SecretFormComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthenticatedRoutingModule { }
