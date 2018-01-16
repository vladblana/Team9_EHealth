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
import {MyPatientsComponent} from './my-patients/my-patients.component';
import {MatStepperModule} from '@angular/material/stepper';
import {PatientRegistrationRequestComponent} from './patient-registration-request/patient-registration-request.component';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material';
import {PatientMainpageComponent} from './patient-mainpage/patient-mainpage.component';
import {CdkTableModule} from '@angular/cdk/table';
import {DoctorPageComponent} from './doctor-page/doctor-page.component';
import {MatToolbarModule} from '@angular/material';
import {ViewDoctorsComponent} from './view-doctors/view-doctors.component';
import {PatientNavbarComponent} from './patient-navbar/patient-navbar.component';
import {DoctorPageNavbarComponent} from './doctor-page-navbar/doctor-page-navbar.component';
import {CreateAppointmentComponent} from './create-appointment/create-appointment.component';
import {DeleteAccountComponent} from './delete-account/delete-account.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatCardModule} from '@angular/material/card';
import {MatRadioModule} from '@angular/material/radio';
import {MatDialogModule} from '@angular/material/dialog';
import {DoctorReviewComponent} from './doctor-review/doctor-review.component';
import {MatSliderModule} from '@angular/material/slider';
import {PatientUnlistingRequestComponent} from './patient-unlisting-request/patient-unlisting-request.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {DoctorMedicalHistoryComponent} from './doctor-medical-history/doctor-medical-history.component';
import {DoctorMedicalRecordComponent} from './doctor-medical-record/doctor-medical-record.component';
import {DialogOverviewExampleDialogComponent} from './dialog-overview-example-dialog/dialog-overview-example-dialog.component';
import {ChartsModule} from 'ng2-charts';
import {AuthService} from './service/auth.service';
import {DoctorService} from './service/DoctorService';
import {PatientService} from './service/PatientService';
import {MatButtonModule} from '@angular/material/button';
import {PatientProgressComponent} from './patient-progress/patient-progress.component';
import {MatTabsModule} from '@angular/material/tabs';
import {MatExpansionModule} from '@angular/material/expansion';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


const appRoutes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'cacat', component: AppComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'not-found', component: PageNotFoundComponent},
  {path: 'my-patients', component: MyPatientsComponent},
  {path: 'doctor-page', component: DoctorPageComponent},
  {path: 'patient-mainpage', component: PatientMainpageComponent},
  {path: 'view-doctors', component: ViewDoctorsComponent},
  {path: 'patient-registration-request', component: PatientRegistrationRequestComponent},
  {path: 'patient-unlisting-request', component: PatientUnlistingRequestComponent},
  {path: 'patient-unlisting-request/:username', component: PatientUnlistingRequestComponent},
  {path: 'create-appointment', component: CreateAppointmentComponent},
  {path: 'delete-account', component: DeleteAccountComponent},
  {path: 'doctor-review', component: DoctorReviewComponent},
  {path: 'patient-progress', component: PatientProgressComponent},
  {path: 'doctor-medical-history/:username', component: DoctorMedicalHistoryComponent},
  {path: 'doctor-medical-record/:username', component: DoctorMedicalRecordComponent},
  {path: '**', redirectTo: '/not-found'}
];


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    PageNotFoundComponent,
    MyPatientsComponent,
    PatientMainpageComponent,
    DoctorPageComponent,
    DoctorPageNavbarComponent,
    PatientRegistrationRequestComponent,
    ViewDoctorsComponent,
    PatientNavbarComponent,
    CreateAppointmentComponent,
    DeleteAccountComponent,
    DoctorMedicalHistoryComponent,
    DoctorMedicalRecordComponent,
    DoctorReviewComponent,
    PatientUnlistingRequestComponent,
    DialogOverviewExampleDialogComponent,
    PatientProgressComponent,
  ],
  entryComponents: [DialogOverviewExampleDialogComponent],
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
    MatToolbarModule,
    ReactiveFormsModule,
    MatStepperModule,
    MatTableModule,
    MatToolbarModule,
    MatPaginatorModule,
    CdkTableModule,
    MatCheckboxModule,
    MatCardModule,
    MatRadioModule,
    MatDialogModule,
    MatSnackBarModule,
    MatSliderModule,
    ChartsModule,
    MatButtonModule,
    MatTabsModule,
    MatExpansionModule,
    NgbModule
  ],
  providers: [AuthService, DoctorService, PatientService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
