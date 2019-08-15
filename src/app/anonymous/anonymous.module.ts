import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnonymousRoutingModule } from './anonymous-routing.module';
import { LandingPageComponent } from './landing-page/landing-page.component';



@NgModule({
  imports: [
    CommonModule,
    AnonymousRoutingModule
  ],
  declarations: [LandingPageComponent]
})
export class AnonymousModule { }
