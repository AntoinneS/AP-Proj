import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { routing } from './signup.routing';
import { SharedModule } from '../../shared/shared.module';
import { SignupComponent } from './signup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
@NgModule({
  imports: [
    CommonModule,
        SharedModule,
        FormsModule,
        ToastrService,
        ReactiveFormsModule,
        routing
  ],
  declarations: [SignupComponent]
})
export class SignupModule { }
