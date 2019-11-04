import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { routing } from './editor.routing';
import { SharedModule } from '../../shared/shared.module';
import { EditorComponent } from './editor.component';
import { NgxPaginationModule } from 'ngx-pagination';
/* components */
import { TableComponent } from '../table/table.component';
import { BasicTablesComponent } from '../table/components/basic-tables/basic-tables.component';
import { DataTableComponent } from '../table/components/data-table/data-table.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        SharedModule,
        NgxPaginationModule,
        TableComponent,
        BasicTablesComponent,
        DataTableComponent,
        routing
    ],
    declarations: [
        EditorComponent
    ]
})
export class EditorModule { }
