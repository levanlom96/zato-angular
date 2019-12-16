import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { AppComponent } from './app.component';
import { KeyboardComponent } from './keyboard/keyboard.component';
import { BlankComponent } from './blank/blank.component';

import { SuperService } from './services/super.service';

@NgModule({
  declarations: [
    AppComponent,
    KeyboardComponent,
    BlankComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  bootstrap: [AppComponent],
  providers: [SuperService]
})
export class AppModule { }
