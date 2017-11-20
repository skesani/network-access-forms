import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpModule} from '@angular/http';


import {ShowErrorsComponent} from './error-components/show-errors.component';

import {AppComponent} from './app.component';
import {NetworkaccessComponent} from './networkaccess/networkaccess.component';
import {HeaderComponent} from './header/header.component';
import {UpdatedformComponent} from './updatedform/updatedform.component';
import {CuurentformComponent} from './cuurentform/cuurentform.component';
import {ReactFormSelectComponent} from './react-form-select/react-form-select.component';
import {ReactiveapproachComponent} from './reactiveapproach/reactiveapproach.component';
import {RouterModule} from '@angular/router';
import { DynamicapproachComponent } from './dynamicapproach/dynamicapproach.component';
import { DoctorsScheduleComponent } from './doctors-schedule/doctors-schedule.component';
import {DoctorsService} from './doctors-schedule/DoctorsService';


@NgModule({
  imports: [BrowserModule, ReactiveFormsModule, FormsModule, HttpModule,
    RouterModule.forRoot([
        { path: 'select', component: ReactFormSelectComponent}
    ])
  ],
  declarations: [AppComponent, ShowErrorsComponent,
    NetworkaccessComponent, HeaderComponent, UpdatedformComponent, CuurentformComponent,
    ReactFormSelectComponent, ReactiveapproachComponent, DynamicapproachComponent],
  bootstrap: [AppComponent],
  providers: [DoctorsService]
})
export class AppModule {
}
