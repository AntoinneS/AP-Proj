import { Routes, RouterModule } from '@angular/router';
import { PagesComponent } from './pages/pages.component';
import { EditorComponent } from './pages/editor/editor.component';
import { LoginComponent } from './pages/login/login.component';

const appRoutes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
  path: 'signup', loadChildren: () => import('./pages/signup/signup.module').then(m => m.SignupModule
  }
];

export const routing = RouterModule.forRoot(appRoutes);
