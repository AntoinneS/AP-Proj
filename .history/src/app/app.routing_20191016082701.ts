import { Routes, RouterModule } from '@angular/router';
import { PagesComponent } from './pages/pages.component';
import { EditorComponent } from './pages/editor/editor.component';
import { LoginComponent } from './pages/login/login.component';
import {SignupComponent} from './pages/signup/signup.component'

const appRoutes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'signup',
    component: SignupComponent
  },
];

export const routing = RouterModule.forRoot(appRoutes);
