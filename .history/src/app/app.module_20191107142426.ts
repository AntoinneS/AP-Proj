import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { PagesModule } from './pages/pages.module';
import { routing } from './app.routing';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from "@angular/common/http";
import { ProfileService } from './shared/profile.service';
//import { TestPComponent } from './test-p/test-p.component';
import { SamplePageComponent } from './components/sample-page/sample-page.component';



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
    AppComponent,
  //  TestPComponent,
    SamplePageComponent  ],
  providers: [ProfileService],
  bootstrap: [AppComponent]
})
export class AppModule { }

