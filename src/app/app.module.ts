import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NgxShareComponent } from './ngx-share/ngx-share.component';
import { ShareModule } from '@ngx-share/core';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    NgxShareComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ShareModule.forRoot(),
    HttpClientModule,       // for share counts
    HttpClientJsonpModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
