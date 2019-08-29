import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnonymousRoutingModule } from './anonymous-routing.module';
import { AnonymousFormComponent } from './anonymous-form/anonymous-form.component';
import { AnonymousComponent } from '../anonymous/anonymous.component';
import { MatDemoComponent } from './mat-demo/mat-demo.component';

@NgModule({
  imports: [
    CommonModule,
    AnonymousRoutingModule
  ],
  declarations: [AnonymousFormComponent, AnonymousComponent, MatDemoComponent]
})
export class AnonymousModule { }
