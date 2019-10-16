import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
// import { routing } from './login.routing'; The routing works without this not exactly sure why. Getting error when used
import { LoginComponent } from './login.component';

@NgModule({
    imports: [
      CommonModule,
          SharedModule,
         // routing
    ],
    declarations: [LoginComponent]
  })
export class LoginModule {}
