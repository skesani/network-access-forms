import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';


import { ShowErrorsComponent } from './error-components/show-errors.component';

import { AppComponent } from './app.component';
import { NetworkaccessComponent } from './networkaccess/networkaccess.component';
import { HeaderComponent } from './header/header.component';
import { UpdatedformComponent } from './updatedform/updatedform.component';
import { CurrentformComponent } from './currentform/currentform.component';

@NgModule({
  imports: [BrowserModule, ReactiveFormsModule, FormsModule, HttpModule],
  declarations: [AppComponent, ShowErrorsComponent, NetworkaccessComponent, HeaderComponent, UpdatedformComponent, CurrentformComponent],
  bootstrap: [AppComponent]
})
export class AppModule {
}
