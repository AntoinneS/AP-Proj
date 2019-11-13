import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxEchartsModule } from 'ngx-echarts';
import { ModalsComponent } from './modals.component';
import { SharedModule } from '../../../../shared/shared.module';
import { routing } from './modals.routing';


@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        NgxEchartsModule,
        routing
    ],
    declarations: [
        ModalsComponent
    ]
})
export class ModalsModule { }
