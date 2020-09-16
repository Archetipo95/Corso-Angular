import { AutoriService } from './autori.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AutoriComponent } from './autori/autori.component';

@NgModule({
  declarations: [
    AppComponent,
    AutoriComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    AutoriService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
