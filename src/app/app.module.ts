import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';

const route:Routes=[
  {
    path:'about',
    loadChildren: () => import('./about/about.module').then(m => m.AboutModule)
  },
  {
    path:'register',
    loadChildren: () => import('./register/register.module').then(m => m.RegisterModule)
  },
  {
    path:'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginModule)
  },
  {
    path:'menu',
    loadChildren: () => import('./menu/menu.module').then(m => m.MenuModule)
  },
  
]

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(route),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
