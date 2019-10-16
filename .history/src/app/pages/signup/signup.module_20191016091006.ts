import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { routing } from './signup.routing';
import { SharedModule } from '../../shared/shared.module';
import { SignupComponent } from './signup.component';
@NgModule({
  imports: [
    CommonModule,
        SharedModule,
        routing
  ],
  declarations: [SignupComponent]
})
export class SignupModule { }
