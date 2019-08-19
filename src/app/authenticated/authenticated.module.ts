import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthenticatedRoutingModule } from './authenticated-routing.module';
import { SecretPageComponent } from './secret-page/secret-page.component';
import { AuthenticatedComponent } from '../authenticated/authenticated.component';
import { SecretFormComponent } from './secret-form/secret-form.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';

@NgModule({
  imports: [
    CommonModule,
    AuthenticatedRoutingModule,
  ],
  declarations: [
    SecretPageComponent,
    AuthenticatedComponent,
    SecretFormComponent,
    NavigationBarComponent
  ]
})
export class AuthenticatedModule { }
