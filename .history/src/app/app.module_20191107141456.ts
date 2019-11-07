import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { PagesModule } from './pages/pages.module';
import { routing } from './app.routing';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from "@angular/common/http";
import { ProfileService } from './shared/profile.service';


//import { ToastrModule } from 'ngx-toastr';
@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    PagesModule,
    HttpClientModule,
  //  ToastrModule.forRoot(),
    routing
  ],
  declarations: [
    AppComponent
  ],
  providers: [ProfileService],
  bootstrap: [AppComponent]
})
export class AppModule { }

