import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SecretPageComponent } from './secret-page/secret-page.component';


const routes: Routes = [
  {
    path:'', component: SecretPageComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthenticatedRoutingModule { }
