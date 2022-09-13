import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyAppComponent } from './my-app.component';
import { BrowserModule } from '@angular/platform-browser';
import { AuthModule } from '../auth/auth.module';



@NgModule({
  declarations: [
    MyAppComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AuthModule
  ],
  bootstrap: [
    MyAppComponent,
  ]
})
export class MyAppModule { }
