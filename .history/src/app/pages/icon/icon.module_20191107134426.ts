import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { routing } from './icon.routing';
import { SharedModule } from '../../shared/shared.module';;
import { NgxPaginationModule } from 'ngx-pagination';
import { IconComponent } from './icon.component';

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        FormsModule,
        ReactiveFormsModule,
        NgxPaginationModule,
        routing
    ],
    declarations: [
        IconComponent
    ]
})
export class IconModule { }
