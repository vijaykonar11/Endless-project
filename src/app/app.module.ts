import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from '@angular/cdk/layout';
import { HowItWorksComponent } from './how-it-works/how-it-works.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import {ConnectionServiceModule} from 'ng-connection-service';   



@NgModule({
  declarations: [AppComponent, HowItWorksComponent],
  imports: [BrowserModule, LayoutModule, AppRoutingModule, HttpClientModule,ConnectionServiceModule, ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
