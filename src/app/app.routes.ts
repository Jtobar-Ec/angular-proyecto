import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TasksComponent } from './components/tasks/tasks.component';
import { PrivateTasksComponent } from './components/private-tasks/private-tasks.component';
import { BienesComponent } from './components/bienes/bienes.component';
import { SignupComponent } from './components/signup/signup.component';
import { SigninComponent } from './components/signin/signin.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';







export const routes: Routes = [
    {
        path:'',
        redirectTo:'/tasks',
        pathMatch:'full'
    },
    
    {
        path: 'tasks',
        component: TasksComponent
    },
    {
        path:'private',
        component: PrivateTasksComponent
    },
    {
        path: 'signup',
        component: SignupComponent
    },
    {
        path: 'signin',
        component: SigninComponent
    },
    {
        path: 'bienes',
        component: BienesComponent
    },{
        path: 'dashboard',
        component: DashboardComponent
    }

];
