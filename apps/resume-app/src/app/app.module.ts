import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { CoreModule } from '@resume/core';
import { SharedModule } from '@resume/shared';
import { ResumeModule } from '@resume/resume';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CoreModule,
    SharedModule,
    ResumeModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
