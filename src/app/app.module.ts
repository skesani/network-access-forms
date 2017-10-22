import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ShowErrorsComponent } from './error-components/show-errors.component';

import { AppComponent } from './app.component';
import { NetworkaccessComponent } from './networkaccess/networkaccess.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  imports: [BrowserModule, ReactiveFormsModule],
  declarations: [AppComponent, ShowErrorsComponent, NetworkaccessComponent, HeaderComponent],
  bootstrap: [AppComponent]
})
export class AppModule {
}
