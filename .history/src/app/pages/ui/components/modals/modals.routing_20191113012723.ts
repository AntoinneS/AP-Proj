import { Routes, RouterModule } from '@angular/router';
import { ModalsComponent } from './modals.component';

const childRoutes: Routes = [
    {
        path: '',
        component: ModalsComponent
    }
];

export const routing = RouterModule.forChild(childRoutes);
