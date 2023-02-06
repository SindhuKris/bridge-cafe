import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DishesComponent } from './dishes.component';
import { RouterModule, Routes } from '@angular/router';
const route:Routes=[
  {
    path:':dish',
    component:DishesComponent
  },
  {
    path:'**',
    redirectTo:'dishes'
  }
]


@NgModule({
  declarations: [
    DishesComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(route),
  ]
})
export class DishesModule { }
