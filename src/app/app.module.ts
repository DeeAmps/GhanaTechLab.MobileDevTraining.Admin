import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatCardModule,
  MatButtonModule,
  MatTableModule,
  MatPaginatorModule,
  MatSortModule,
  MatToolbarModule,
  MatSidenavModule,
  MatListModule,
  MatGridListModule,
  MatMenuModule,
  MatIconModule,
  MatFormFieldModule,
  MatCheckboxModule,
  MatDatepickerModule,
  MatSliderModule,
  MatNativeDateModule,
  MatSelectModule,
  MatInputModule,
  MatRadioModule} from '@angular/material';
import { LayoutModule } from '@angular/cdk/layout';
import { NavComponent } from './nav/nav.component';
import { ApiCallsService } from './services/api-calls.service';
import { LoginComponent } from './login/login.component';
import { NgxUiLoaderModule } from  'ngx-ui-loader';
import { ApplicantComponent } from './applicant/applicant.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    LoginComponent,
    ApplicantComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatGridListModule,
    NgxUiLoaderModule,
    MatCardModule,
    MatMenuModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatSliderModule,
    MatNativeDateModule,
    MatSelectModule,
    MatInputModule,
    MatRadioModule,
    MatIconModule,
    MatButtonModule,
    LayoutModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    FormsModule
  ],
  providers: [
    ApiCallsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
