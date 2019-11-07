import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { routing } from './pages.routing';
import { FormsModule, ReactiveFormsModule, }   from '@angular/forms';
import { LayoutModule } from '../shared/layout.module';
import { SharedModule } from '../shared/shared.module';

/* components */
import { PagesComponent } from './pages.component';
import { LoginComponent } from './login/login.component';
import { SamplePageComponent } from '../components/sample-page/sample-page.component';

@NgModule({
    imports: [
        CommonModule,
        LayoutModule,
        SharedModule,
        FormsModule,
        ReactiveFormsModule,
        routing
    ],
    declarations: [
        PagesComponent,
        LoginComponent,
        SamplePageComponent
    ]
})
export class PagesModule { }
