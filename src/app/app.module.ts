import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { AppComponent } from './app.component';
import { KeyboardComponent } from './keyboard/keyboard.component';
import { BlankComponent } from './blank/blank.component';
import { SuperService } from './services/super.service';

import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { ListingComponent } from './pages/listing/listing.component';

@NgModule({
  declarations: [
    AppComponent,
    KeyboardComponent,
    BlankComponent,
    HomeComponent,
    ListingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
  ],
  bootstrap: [AppComponent],
  providers: [SuperService]
})
export class AppModule { }
