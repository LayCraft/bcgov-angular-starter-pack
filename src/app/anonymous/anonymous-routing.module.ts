import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AnonymousFormComponent } from './anonymous-form/anonymous-form.component';

const routes: Routes = [
  {
    path:'',
    component: AnonymousFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AnonymousRoutingModule { }
