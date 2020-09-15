import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from '@angular/cdk/layout';
import { HowItWorksComponent } from './how-it-works/how-it-works.component';

@NgModule({
  declarations: [AppComponent, HowItWorksComponent],
  imports: [BrowserModule, LayoutModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
