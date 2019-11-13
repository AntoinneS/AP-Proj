import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { routing } from './pages.routing';
import { FormsModule, ReactiveFormsModule, }   from '@angular/forms';
import { LayoutModule } from '../shared/layout.module';
import { SharedModule } from '../shared/shared.module';
import { NgxEchartsModule } from 'ngx-echarts';
/* components */
import { PagesComponent } from './pages.component';
import { LoginComponent } from './login/login.component';
@NgModule({
    imports: [
        CommonModule,
        LayoutModule,
        NgxEchartsModule,
        SharedModule,
        FormsModule,
        ReactiveFormsModule,
        routing
    ],
    declarations: [
        PagesComponent,
        LoginComponent
    ]
})
export class PagesModule { }
