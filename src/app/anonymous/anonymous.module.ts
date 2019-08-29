import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnonymousRoutingModule } from './anonymous-routing.module';
import { AnonymousFormComponent } from './anonymous-form/anonymous-form.component';
import { AnonymousComponent } from '../anonymous/anonymous.component';
import { MatDemoComponent } from './mat-demo/mat-demo.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    AnonymousRoutingModule,
    SharedModule // need this for the material components
  ],
  declarations: [AnonymousFormComponent, AnonymousComponent, MatDemoComponent]
})
export class AnonymousModule { }
