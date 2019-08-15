import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthenticatedRoutingModule } from './authenticated-routing.module';
import { SecretPageComponent } from './secret-page/secret-page.component';



@NgModule({
  imports: [
    CommonModule,
    AuthenticatedRoutingModule
  ],
  declarations: [SecretPageComponent]
})
export class AuthenticatedModule { }
