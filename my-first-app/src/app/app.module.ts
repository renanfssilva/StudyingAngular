import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
<<<<<<< HEAD

=======
>>>>>>> parent of f7dad96... Empty project using Bootstrap

import { AppComponent } from './app.component';
import { WarningAlertComponent } from './warning-alert/warning-alert.component';
import { SuccessAlertComponent } from './success-alert/success-alert.component';

@NgModule({
  declarations: [
    AppComponent,
    SuccessAlertComponent,
    WarningAlertComponent
  ],
  imports: [
    BrowserModule,
<<<<<<< HEAD
    FormsModule,
=======
    FormsModule
>>>>>>> parent of f7dad96... Empty project using Bootstrap
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
