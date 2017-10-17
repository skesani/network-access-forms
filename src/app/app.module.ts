import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ShowErrorsComponent } from './error-components/show-errors.component';

import { AppComponent } from './app.component';

@NgModule({
  imports: [BrowserModule, ReactiveFormsModule],
  declarations: [AppComponent, ShowErrorsComponent],
  bootstrap: [AppComponent]
})
export class AppModule {
}
