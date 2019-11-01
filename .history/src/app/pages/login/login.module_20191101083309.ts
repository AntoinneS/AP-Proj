import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { routing } from './login.routing';
import { SharedModule } from '../../shared/shared.module';
import { LoginComponent } from './login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//import { ToastrService } from 'ngx-toastr';
@NgModule({
  imports: [
    CommonModule,
        SharedModule,
        FormsModule,
      //  ToastrService,
        ReactiveFormsModule,
        routing
  ],
  declarations: [LoginComponent]
})
export class LoginModule { }