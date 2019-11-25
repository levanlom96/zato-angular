import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { GeneralComponent } from './general/general.component';
import { CapitanComponent } from './capitan/capitan.component';
import { CapralComponent } from './capral/capral.component';

@NgModule({
  declarations: [
    AppComponent,
    GeneralComponent,
    CapitanComponent,
    CapralComponent
  ],
  imports: [
    BrowserModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
