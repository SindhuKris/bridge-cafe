import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu.component';
import { RouterModule, Routes } from '@angular/router';

 const route:Routes=[
  {
    path:'',
    component:MenuComponent,
    loadChildren:() => import('../dishes/dishes.module').then(m => m.DishesModule)
  }
 ]

@NgModule({
  declarations: [
    MenuComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(route),
  ]
})
export class MenuModule { }
