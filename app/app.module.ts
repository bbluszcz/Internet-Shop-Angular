import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core'; // LOCALE_ID - dodać !!!
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    { // dodałem usługę pokazywania polskiego formatowania
      provide: LOCALE_ID, // dodać w importach!!!
      useValue: 'pl-PL'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }