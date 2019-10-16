import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupComponent } from './signup.component';

const childRoutes: Routes = [
    {
        path: '', 
       component: SignupComponent
    }
];

export const routing = RouterModule.forChild(childRoutes);

