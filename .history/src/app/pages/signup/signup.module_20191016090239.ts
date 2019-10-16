import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { routing } from './signup.routing';
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
