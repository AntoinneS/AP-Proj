import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxEchartsModule } from 'ngx-echarts';
import { ModalsComponent } from './modals.component';
import { SharedModule } from '../../../../shared/shared.module';
import { routing } from './modals.routing';
import { NgxPaginationModule } from 'ngx-pagination';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-modal';


@NgModule({
    imports: [
 
        NgxEchartsModule,
        NgxPaginationModule,
        ReactiveFormsModule ,
        FormsModule,
        CommonModule,
        SharedModule,
        ModalModule,
        routing
    ],
    declarations: [
        ModalsComponent
    ]
})
export class ModalsModule { }
