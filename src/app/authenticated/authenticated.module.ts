import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthenticatedRoutingModule } from './authenticated-routing.module';
import { SecretPageComponent } from './secret-page/secret-page.component';
import { AuthenticatedComponent } from '../authenticated/authenticated.component';
import { SecretFormComponent } from './secret-form/secret-form.component';

@NgModule({
  imports: [
    CommonModule,
    AuthenticatedRoutingModule
  ],
  declarations: [
    SecretPageComponent,
    AuthenticatedComponent,
    SecretFormComponent
  ]
})
export class AuthenticatedModule { }
