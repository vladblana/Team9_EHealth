import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {LoginComponent} from './login/login.component';
import {RouterModule, Routes} from '@angular/router';
import {RegisterComponent} from './register/register.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatDatepickerModule, MatIconModule, MatNativeDateModule} from '@angular/material';
import {MatFormFieldModule} from '@angular/material';
import {MatInputModule} from '@angular/material';
import {MatSelectModule} from '@angular/material/select';
import {MatStepperModule} from '@angular/material/stepper';
import {PatientRegistrationRequestComponent} from './patient-registration-request/patient-registration-request.component';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material';
import {PatientMainpageComponent} from './patient-mainpage/patient-mainpage.component';
import {DoctorPageComponent} from './doctor-page/doctor-page.component';
import {MatToolbarModule} from '@angular/material';
import { ViewDoctorsComponent } from './view-doctors/view-doctors.component';
import { PatientNavbarComponent } from './patient-navbar/patient-navbar.component';
import {DoctorService} from './service/DoctorService';
import {Doctor} from './model/Doctor';
import {Patient} from './model/Patient';

const appRoutes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'cacat', component: AppComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'not-found', component: PageNotFoundComponent},
  {path: 'doctor-page', component: DoctorPageComponent},
  {path: 'patient-mainpage', component: PatientMainpageComponent},
  {path: 'patient-mainpage/:username', component: PatientMainpageComponent},
  {path: 'view-doctors', component: ViewDoctorsComponent},
  {path: 'patient-registration-request', component: PatientRegistrationRequestComponent},
  {path: '**', redirectTo: '/not-found'}
];


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    PageNotFoundComponent,
    PatientMainpageComponent,
    DoctorPageComponent,
    PatientRegistrationRequestComponent,
    ViewDoctorsComponent,
    PatientNavbarComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    MatStepperModule,
    MatTableModule,
    MatToolbarModule,
    MatPaginatorModule
  ],
  providers: [DoctorService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
