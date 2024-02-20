import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {TasksComponent } from './components/tasks/tasks.component';
import { SigninComponent } from './components/signin/signin.component';
import {SignupComponent} from './components/signup/signup.component';
import { PrivateTasksComponent } from './components/private-tasks/private-tasks.component';
import { UserEditComponent } from './components/user-edit/user-edit.component';


import { AuthGuard } from 'auth.guard';
import { BienesComponent } from './components/bienes/bienes.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';


const routes: Routes = [
  {
    path:'',
    redirectTo:'/tasks',
    pathMatch: 'full'

  },{
    path: 'tasks',
    component: TasksComponent
  },{
    path: 'signup',
    component: SignupComponent
  },{
    path: 'signin',
    component: SigninComponent
  },{
    path: 'private',
    component: PrivateTasksComponent,
    canActivate:[AuthGuard]
  },{
    path: 'bienes',
    component: BienesComponent,
    
  }, 
  { path: 'private/:id/edit', 
    component: UserEditComponent 
  },{
      path: 'dashboard',
      component: DashboardComponent,
      
    }



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
