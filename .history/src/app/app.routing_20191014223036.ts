import { Routes, RouterModule } from '@angular/router';
import { PagesComponent } from './pages/pages.component';
import { EditorComponent } from './pages/editor/editor.component';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: 'pages/form',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'pages/index'
  }
];

export const routing = RouterModule.forRoot(appRoutes);
