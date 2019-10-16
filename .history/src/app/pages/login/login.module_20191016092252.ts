import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { routing } from './login.routing';
import { SharedModule } from '../../shared/shared.module';
import { LoginComponent } from './login.component';
@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        routing
    ],
    declarations: [LoginComponent]
})
export class LoginModule {}
