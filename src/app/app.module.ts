import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/pages/home/home.component';
import { RegisterComponent } from './components/pages/register/register.component';
import { PlateCheckComponent } from './components/pages/plate-check/plate-check.component';
import { SharedModule } from './modules/shared/shared.module';
import { ToastrModule } from 'ngx-toastr';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegisterComponent,
    PlateCheckComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    SharedModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(
      { positionClass: 'toast-bottom-right' }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
