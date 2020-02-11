import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './material.module';
import { PaymentsenseCodingChallengeApiService } from './services';

import { AppComponent } from './app.component';
import { CountriesComponent } from './countries/countries.component';
import { HealthComponent } from './health/health.component';
import { CountryDialogComponent } from './country-dialog/country-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    CountriesComponent,
    HealthComponent,
    CountryDialogComponent,
  ],
  entryComponents: [
    CountryDialogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FontAwesomeModule,
    MaterialModule,
    FlexLayoutModule
  ],
  exports: [
    MaterialModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FontAwesomeModule,
    MaterialModule,
    FlexLayoutModule
  ],
  providers: [PaymentsenseCodingChallengeApiService],
  bootstrap: [AppComponent]
})

export class AppModule { }
