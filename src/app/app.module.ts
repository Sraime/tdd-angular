import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ComplexMessageComponent } from './complex-message/complex-message.component';
import { MessageService } from './message.service';
import { GlobalMessageComponent } from './global-message/global-message.component';

@NgModule({
  declarations: [
    AppComponent,
    ComplexMessageComponent,
    GlobalMessageComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
