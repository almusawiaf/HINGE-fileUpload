import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { MatButtonModule } from '@angular/material';

import { AppComponent } from './app.component';
import { MatFileUploadModule } from 'angular-material-fileupload';
import { HttpClientModule} from '@angular/common/http';

@NgModule({
  imports: [
    MatButtonModule,
    BrowserModule,
    MatFileUploadModule,
    HttpClientModule
  ],
  declarations: [
    AppComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }