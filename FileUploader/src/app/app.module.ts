import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { MatButtonModule } from '@angular/material';

import { AppComponent } from './app.component';
import { MatFileUploadModule } from 'angular-material-fileupload';

@NgModule({
  imports: [
    MatButtonModule,
    BrowserModule,
    MatFileUploadModule
  ],
  declarations: [
    AppComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }