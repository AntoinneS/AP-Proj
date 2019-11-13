import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { PagesModule } from './pages/pages.module';
import { routing } from './app.routing';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from "@angular/common/http";
import { ProfileService } from './shared/profile.service';
import { NgxEchartsModule } from 'ngx-echarts';
import { ChartsComponent } from './pages/charts/charts.component';
import { EChartsComponent } from './pages/charts/components/echarts/echarts.component';


//import { ToastrModule } from 'ngx-toastr';
@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    PagesModule,
    HttpClientModule,
    NgxEchartsModule,
  //  ToastrModule.forRoot(),
    routing
  ],
  declarations: [
    AppComponent,
    ChartsComponent,
    EChartsComponent
  //  TestPComponent,
 ],
  providers: [ProfileService],
  bootstrap: [AppComponent]
})
export class AppModule { }

