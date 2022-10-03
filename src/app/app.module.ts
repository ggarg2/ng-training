import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {AuthModule} from "./auth/auth.module";
import { TestPipe } from './test.pipe';
import {FormsModule} from "@angular/forms";
import { NestedFormComponent } from './nested-form/nested-form.component';


@NgModule({
  declarations: [
    AppComponent,
    TestPipe,
    NestedFormComponent,
  ],
  imports: [
    BrowserModule,
    AuthModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
