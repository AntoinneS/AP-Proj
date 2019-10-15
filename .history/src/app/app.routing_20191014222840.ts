import { Routes, RouterModule } from '@angular/router';
import { PagesComponent } from './pages/pages.component';
import { EditorComponent } from './pages/editor/editor.component';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: 'pages/editor',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'pages/editor'
  }
];

export const routing = RouterModule.forRoot(appRoutes);
