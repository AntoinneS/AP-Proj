import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { routing } from './pages.routing';
import { FormsModule, ReactiveFormsModule, }   from '@angular/forms';
import { LayoutModule } from '../shared/layout.module';
import { SharedModule } from '../shared/shared.module';

/* components */
import { PagesComponent } from './pages.component';
import { LoginComponent } from './login/login.component';
import { NgxEchartsModule } from 'ngx-echarts';
import { ChartsComponent } from './charts/charts.component';
import { EChartsComponent } from './charts/components/echarts/echarts.component';
@NgModule({
    imports: [
        CommonModule,
        LayoutModule,
        SharedModule,
        FormsModule,
        NgxEchartsModule,
        ReactiveFormsModule,
        routing
    ],
    declarations: [
        PagesComponent,
        ChartsComponent ,
        EChartsComponent,
        LoginComponent
    ]
})
export class PagesModule { }
